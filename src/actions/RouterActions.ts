
import { history } from '../store/configureStore';
import { CHANGE_ROUTE } from '../constants/ActionTypes';

export const navigateTo = (route: string) => {
    history.push(route);

    return {
        type: CHANGE_ROUTE,
        payload: {
            route,
        }
    };
};

export const navigateBack = () => {
    history.goBack();

    return {
        type: CHANGE_ROUTE,
    };
};
