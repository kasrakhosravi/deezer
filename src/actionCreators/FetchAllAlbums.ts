
import callApi from '../utils/ApiUtils';
import { ARTIST_ALBUMS_URL } from '../constants/ApiConstants';
import { fetchAllAlbumsRequest, fetchAllAlbumsSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: any) => {

        dispatch(fetchAllAlbumsRequest());

        try {
            const result  = await callApi(ARTIST_ALBUMS_URL.replace(':id', id));
            const { data, next, total } = result.json;
            dispatch(fetchAllAlbumsSuccess(data, next, total));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
