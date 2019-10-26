
import callApi from '../utils/ApiUtils';
import { ARTIST_ALBUMS_URL } from '../constants/ApiConstants';
import { fetchAllAlbumsRequest, fetchAllAlbumsSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchAllAlbumsRequest());

        try {
            const { json }  = await callApi(ARTIST_ALBUMS_URL.replace(':id', id));
            dispatch(fetchAllAlbumsSuccess(json.data || json));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
