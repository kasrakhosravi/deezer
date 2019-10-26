
import callApi from '../utils/ApiUtils';
import { ALBUM_URL } from '../constants/ApiConstants';
import { fetchSingleAlbumRequest, fetchSingleAlbumSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchSingleAlbumRequest());

        try {
            const result  = await callApi(ALBUM_URL.replace(':id', id));
            dispatch(fetchSingleAlbumSuccess(result.json));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
