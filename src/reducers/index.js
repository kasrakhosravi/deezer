
// global dependencies
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// local dependencies
import artistReducer from './artistReducer';
import searchBoxReducer from './searchBoxReducer';


const rootReducer = combineReducers({
  artistReducer,
  searchBoxReducer,
  routing: routerReducer,
});

export default rootReducer;
