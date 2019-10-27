
import callApi from '../utils/ApiUtils';
import { fetchAllAlbumsRequest, fetchAllAlbumsSuccess } from '../actions/AlbumActions';

// proxy
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default (url: any) => {
    let thunk = async (dispatch: any) => {

        dispatch(fetchAllAlbumsRequest());

        try {
            const result  = await callApi(proxyurl + url);

            const { data, next, prev, total } = result.json;
            dispatch(fetchAllAlbumsSuccess(data, next, prev, total));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
