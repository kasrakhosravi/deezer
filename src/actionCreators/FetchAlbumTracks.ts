
import callApi from '../utils/ApiUtils';
import { ALBUM_TRACKS_URL } from '../constants/ApiConstants';
import { fetchAlbumTracksRequest, fetchAlbumTracksSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchAlbumTracksRequest());

        try {
            const { json }  = await callApi(ALBUM_TRACKS_URL.replace(':id', id));
            dispatch(fetchAlbumTracksSuccess(json.data || json));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
