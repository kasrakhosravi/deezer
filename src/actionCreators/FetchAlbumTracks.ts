
import { Dispatch } from 'redux';

import callApi from '../utils/ApiUtils';
import { ALBUM_TRACKS_URL } from '../constants/ApiConstants';
import { fetchAlbumTracksRequest, fetchAlbumTracksSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: Dispatch) => {

        dispatch(fetchAlbumTracksRequest());

        try {
            const result  = await callApi(ALBUM_TRACKS_URL.replace(':id', id));
            dispatch(fetchAlbumTracksSuccess(result.json.data));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
