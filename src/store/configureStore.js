
// global dependencies
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// local dependencies
import rootReducer from '../reducers';

// initialization
const history = createHistory();


function configureStore(initialState) {

	const reactRouterMiddleware = routerMiddleware(history);

	const enhancer = composeWithDevTools(
		applyMiddleware(
			thunkMiddleware,
			reactRouterMiddleware,
		)
	);

	return createStore(rootReducer, initialState, enhancer);
}

export { history, configureStore };
