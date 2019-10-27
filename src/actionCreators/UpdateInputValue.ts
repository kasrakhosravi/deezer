
import { Dispatch } from 'redux';

import { updateInputValue } from '../actions/SearchBoxActions';

const UpdateInputValue = (event: any, { newValue }: any) => {
    return async (dispatch: Dispatch) => {
        dispatch(updateInputValue(newValue));
    };
};


export default UpdateInputValue;


