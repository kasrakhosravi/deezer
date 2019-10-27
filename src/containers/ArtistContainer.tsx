
// global dependencies
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Artist from '../components/Artist';
import FetchArtist from '../actionCreators/FetchArtist';
import SelectAlbum from '../actionCreators/SelectAlbum';
import ClearAlbumTracks from '../actionCreators/ClearAlbumTracks';

const ArtistContainer = (props: any) => <Artist {...props} />;

const mapStateToProps = (state: any, props: any) => {

    const {
        artist,
        artistLoading,
        albums,
        albumsLoading,
        selectedAlbum,
        selectedAlbumTracks,
    } = state.artistReducer;

    return {
        artist,
        artistLoading,
        albums,
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
            onSelectAlbum: SelectAlbum,
        },
        dispatch
    );

    return { actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
