
import callApi from '../utils/ApiUtils';
import { ARTIST_URL } from '../constants/ApiConstants';
import FetchAllAlbums from '../actionCreators/FetchAllAlbums';
import { fetchArtistRequest, fetchArtistSuccess } from '../actions/ArtistActions';

export default (id: any) => {
    let thunk = async (dispatch: any) => {

        dispatch(fetchArtistRequest());

        try {
            const result  = await callApi(ARTIST_URL.replace(':id', id));
            dispatch(fetchArtistSuccess(result.json));
            dispatch(fetchArtistSuccess(result.json));
            dispatch(FetchAllAlbums(id));
        } catch(error) {
            console.log('err', error);
        }
    };

    return thunk;
};
