
import callApi from '../utils/ApiUtils';
import { SEARCH_ARTIST_URL } from '../constants/ApiConstants';
import { fetchSuggestionsRequest, updateSuggestions } from '../actions/SearchBoxActions';

export default ({ value } : any) => {
    let thunk = async (dispatch: Function) => {

        dispatch(fetchSuggestionsRequest());

        try {
            const result  = await callApi(SEARCH_ARTIST_URL.replace(':keyword', value));
            const collection = result.json.data || result.json;
            dispatch(updateSuggestions(collection, value));
        } catch({ error }) {
            console.log('err', error);
        }
    };

    return thunk;
};
