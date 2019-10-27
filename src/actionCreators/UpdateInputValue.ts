
import { updateInputValue } from '../actions/SearchBoxActions';

const UpdateInputValue = (event: any, { newValue }: any) => {

    console.log('newValue', newValue);

    return async (dispatch: Function) => {
        dispatch(updateInputValue(newValue));
    };
};


export default UpdateInputValue;


