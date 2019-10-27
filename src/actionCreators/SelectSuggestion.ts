
import { navigateTo } from '../actions/RouterActions';
import IArtist from '../interfaces/Artist';

const SelectSuggestion = (event: any, { suggestion }: any) =>
    async (dispatch: Function) => {
        dispatch(navigateTo(`/artist/${suggestion.id}`));
    };

export default SelectSuggestion;
