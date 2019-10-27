
import { Dispatch } from 'redux';

import { navigateTo } from '../actions/RouterActions';

const SelectSuggestion = (event: any, { suggestion }: any) =>
    async (dispatch: Dispatch) => {
        dispatch(navigateTo(`/artist/${suggestion.id}`));
    };

export default SelectSuggestion;
