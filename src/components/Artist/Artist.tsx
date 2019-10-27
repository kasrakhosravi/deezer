
// global dependencies
import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

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
            albumsLoading,
            selectedAlbum,
            selectedAlbumTracks,
            actions,
        } = this.props;

        const { onSelectAlbum } = actions;

        const albumsLoadingView = albumsLoading ? (
            <div className="loading-data">Loading albums...</div>
        ) : null;

        const albumsView = !albumsLoading ? (
            <AlbumsList
                albums={albums}
                onSelectAlbum={onSelectAlbum}
                selectedAlbum={selectedAlbum}
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
