
import { Dispatch } from 'redux';

import callApi from '../utils/ApiUtils';
import { ARTIST_ALBUMS_URL } from '../constants/ApiConstants';
import { fetchAllAlbumsRequest, fetchAllAlbumsSuccess } from '../actions/AlbumActions';

export default (id: any) => {
    let thunk = async (dispatch: Dispatch) => {

        dispatch(fetchAllAlbumsRequest());

        try {
            const result  = await callApi(ARTIST_ALBUMS_URL.replace(':id', id));
            const { data, next, prev, total } = result.json;
            dispatch(fetchAllAlbumsSuccess(data, next, prev, total));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
