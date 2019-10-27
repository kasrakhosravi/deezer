
import { Dispatch } from 'redux';

import { clearAlbumTracks } from '../actions/AlbumActions';

const ClearAlbumTracks = () =>
    async (dispatch: Dispatch) => {
        dispatch(clearAlbumTracks());
    };

export default ClearAlbumTracks;
