
// global dependencies
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// local dependencies
import { configureStore, history } from './store/configureStore';
import Root from './components/Root';

// initialization
const store = configureStore();

render(
    <Root store={store} history={history} />,
    document.getElementById('root'),
);
