
import { Dispatch } from 'redux';

import { clearSuggestions } from '../actions/SearchBoxActions';

const ClearSuggestions = () =>
    async (dispatch: Dispatch) => {
        dispatch(clearSuggestions());
    };

export default ClearSuggestions;
