
import * as Types from '../constants/ActionTypes';
import IArtist from '../interfaces/Artist';

export const updateInputValue = (value: string) => ({
    type: Types.UPDATE_INPUT_VALUE,
    payload: {
        value,
    }
});

export const clearSuggestions = () => ({
    type: Types.CLEAR_SUGGESTIONS,
});

export const fetchSuggestionsRequest = () => ({
    type: Types.FETCH_SUGGESTIONS_REQUEST,
});

export const updateSuggestions = (suggestions: Array<IArtist>, value: string) => ({
    type: Types.UPDATE_SUGGESTIONS,
    payload: {
        suggestions,
        value,
    }
});
