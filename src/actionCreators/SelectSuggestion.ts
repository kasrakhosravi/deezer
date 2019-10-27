
import { navigateTo } from '../actions/RouterActions';

const SelectSuggestion = (event: any, { suggestion }: any) =>
    async (dispatch: Function) => {
        dispatch(navigateTo(`/artist/${suggestion.id}`));
    };

export default SelectSuggestion;
