import * as types from '../constants/ActionTypes';

const initialState = {
  value: '',
  suggestions: [],
  isLoading: false,
};

export default function searchBoxReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.UPDATE_INPUT_VALUE:
      return {
        ...state,
        value: action.value,
      };

    case types.CLEAR_SUGGESTIONS:
      return {
        ...state,
        suggestions: [],
      };

    case types.FETCH_SUGGESTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.UPDATE_SUGGESTIONS:
      // Ignore suggestions if input value changed
      if (action.value !== state.value) {
        return {
          ...state,
          isLoading: false,
        };
      }

      return {
        ...state,
        suggestions: action.suggestions,
        isLoading: false,
      };

    default:
      return state;
  }
}
