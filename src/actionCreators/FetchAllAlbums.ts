
import callApi from '../utils/ApiUtils';
import { ARTIST_ALBUMS_URL } from '../constants/ApiConstants';
import { fetchAllAlbumsRequest, fetchAllAlbumsSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchAllAlbumsRequest());

        try {
            const result  = await callApi(ARTIST_ALBUMS_URL.replace(':id', id));
            dispatch(fetchAllAlbumsSuccess(result.json.data));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
