import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchBoxReducer from './searchBoxReducer';
import artistReducer from './artistReducer';

const rootReducer = combineReducers({
  searchBoxReducer,
  artistReducer,
  routing: routerReducer,
});

export default rootReducer;
