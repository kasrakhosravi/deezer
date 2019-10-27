
import { clearSuggestions } from '../actions/SearchBoxActions';

const ClearSuggestions = () =>
    async (dispatch: Function) => {
        dispatch(clearSuggestions());
    };

export default ClearSuggestions;
