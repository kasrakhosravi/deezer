
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
        const { fetchArtist } = actions;

        fetchArtist(id);
    }

    componentWillReceiveProps(nextProps: any) {
        const { id, actions } = this.props;
        const { fetchArtist } = actions;
        if (nextProps.id !== id) {
            fetchArtist(nextProps.id);
        }
    }

    render() {

        // initialization
        const {
            artist,
            artistLoading,
            albums,
            albumsLoading,
            selectedAlbum,
            selectedAlbumTracks,
            actions,
        } = this.props;

        const { onSelectAlbum } = actions;

        // local components
        /**
        const artistLoadingView = artistLoading ? (
            <div className="loading-data">Loading artist...</div>
        ) : null;

        const artistView = !artistLoading ? (
            <div className="artist-info">
                <div className="artist-info-img">
                    <img src={artist.picture_big} alt="" />
                </div>
                <div className="artist-info-text">
                    <h1>{artist.name}</h1>
                    <p>Total albums: {artist.nb_album}</p>
                    <a
                        href={artist.link}
                        target="_blank"
                        rel="noreferrer noopener"
                    >More information on Deezer</a>
                </div>
            </div>
        ) : null;
         */

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

        console.log('selectedAlbum', selectedAlbum);
        console.log('selectedAlbumTracks', selectedAlbumTracks);

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
