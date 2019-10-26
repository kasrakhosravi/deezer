
// global dependencies
import React, { Component } from 'react';

// local dependencies
import IArtist from '../../interfaces/Artist';

interface IProps {
    fetchArtist: (id: any) => void,
    id: number,
    artist: IArtist,
    albums: [],
    selectedAlbum: {},
    selectedAlbumTracks: {},
    artistLoading: boolean,
    albumsLoading: boolean,
    onAlbumSelected: (id: any) => void,
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

    componentWillMount(): void {
        const { fetchArtist, id } = this.props;
        fetchArtist(id);
    }

    componentWillReceiveProps(nextProps: any) {
        const { fetchArtist, id } = this.props;
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
            onAlbumSelected,
        } = this.props;

        // local components
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

        const albumsLoadingView = albumsLoading ? (
            <div className="loading-data">Loading albums...</div>
        ) : null;

        return (
          <div>
              {artistLoadingView}
              {artistView}
              {albumsLoadingView}
          </div>
        );
    }
}

export default Artist;