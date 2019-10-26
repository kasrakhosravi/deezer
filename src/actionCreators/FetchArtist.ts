
import callApi from '../utils/ApiUtils';
import { ARTIST_URL } from '../constants/ApiConstants';
import { fetchArtistRequest, fetchArtistSuccess } from '../actions/ArtistActions';

export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchArtistRequest());

        try {
            const { json }  = await callApi(ARTIST_URL.replace(':id', id));
            dispatch(fetchArtistSuccess(json.data || json));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
