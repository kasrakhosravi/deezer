
import callApi from '../utils/ApiUtils';
import { ARTIST_URL } from '../constants/ApiConstants';
import { fetchArtistRequest, fetchArtistSuccess } from '../actions/ArtistActions';

export default (id: any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchArtistRequest());

        try {
            const result  = await callApi(ARTIST_URL.replace(':id', id));

            console.log('result', result.json);

            dispatch(fetchArtistSuccess(result.json));
        } catch(error) {
            console.log('err', error);
        }
    };

    return thunk;
};
