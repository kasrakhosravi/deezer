
// global dependencies
import React, { Component } from 'react';
import { Container, Row, Spinner } from 'reactstrap';

// local dependencies
import AlbumsList from '../AlbumList';
import TrackList from '../TrackList';

// interfaces
import IArtist from '../../interfaces/Artist';
import IAlbum from '../../interfaces/Album';
import ITrack from '../../interfaces/Track';

interface IProps {
    fetchArtist: (id: any) => void,
    id: number,
    artist: IArtist,
    albums: Array<IAlbum>,
    next: string,
    prev: string,
    total: number,
    selectedAlbum: IAlbum,
    selectedAlbumTracks: Array<ITrack>,
    artistLoading: boolean,
    albumsLoading: boolean,
    onAlbumSelected: Function,
    actions: any,
}

class Artist extends Component<IProps> {

    static defaultProps = {
        artist: null,
        artistLoading: false,
        albums: [],
        albumsLoading: false,
        selectedAlbum: null,
        selectedAlbumTracks: [],
    };

    componentDidMount(): void {
        const { id, actions } = this.props;
        const { fetchArtist, clearAlbumTracks } = actions;
        fetchArtist(id);
        clearAlbumTracks();
    }

    componentWillReceiveProps(nextProps: any) {
        const { id, actions } = this.props;
        const { fetchArtist, clearAlbumTracks } = actions;
        if (nextProps.id !== id) {
            fetchArtist(nextProps.id);
            clearAlbumTracks();
        }
    }

    render() {

        // initialization
        const {
            albums,
            next,
            prev,
            total,
            albumsLoading,
            selectedAlbum,
            selectedAlbumTracks,
            actions,
        } = this.props;

        const { onSelectAlbum, paginateAlbums } = actions;

        const albumsLoadingView = albumsLoading ? (
          <div className="w-100 text-center">
              <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
          </div>
        ) : null;

        const albumsView = !albumsLoading ? (
            <AlbumsList
                albums={albums}
                next={next}
                prev={prev}
                total={total}
                onSelectAlbum={onSelectAlbum}
                selectedAlbum={selectedAlbum}
                paginateAlbums={paginateAlbums}
            />
        ) : null;

        const trackListView =
            selectedAlbum && selectedAlbumTracks.length > 0 ? (
                <TrackList
                    album={selectedAlbum}
                    tracks={selectedAlbumTracks}
                />
            ) : null;

        return (
          <Container>
              <Row>
                  {albumsLoadingView}
                  {albumsView}
                  {trackListView}
              </Row>
          </Container>
        );
    }
}

export default Artist;
