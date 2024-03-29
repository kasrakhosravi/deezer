
// global dependencies
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// local dependencies
import Artist from '../components/Artist';
import FetchArtist from '../actionCreators/FetchArtist';
import SelectAlbum from '../actionCreators/SelectAlbum';
import ClearAlbumTracks from '../actionCreators/ClearAlbumTracks';
import PaginateAlbums from '../actionCreators/PaginateAlbums';

const ArtistContainer = (props: any) => <Artist {...props} />;

const mapStateToProps = (state: any, props: any) => {

    const {
        artist,
        artistLoading,
        albums,
        next,
        prev,
        totalAlbums,
        albumsLoading,
        selectedAlbum,
        selectedAlbumTracks,
    } = state.artistReducer;

    return {
        artist,
        artistLoading,
        albums,
        next,
        prev,
        totalAlbums,
        albumsLoading,
        selectedAlbum,
        selectedAlbumTracks,
        id: Number.parseInt(props.match.params.id, 10),
    };
};

function mapDispatchToProps(dispatch: any) {
    const actions = bindActionCreators(
        {
            fetchArtist: FetchArtist,
            clearAlbumTracks: ClearAlbumTracks,
            paginateAlbums: PaginateAlbums,
            onSelectAlbum: SelectAlbum,
        },
        dispatch
    );

    return { actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
