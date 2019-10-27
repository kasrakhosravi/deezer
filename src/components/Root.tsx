
// global dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// local dependencies
import SearchBoxContainer from '../containers/SearchBoxContainer';
import ArtistContainer from '../containers/ArtistContainer';

function Root(props: any) {

    let { store, history } = props;

    return (
        <Provider store={store}>
            { /* Tell the Router to use our enhanced history */ }
            <Router history={history}>
                <SearchBoxContainer />
                <Route path="/artist/:id" component={ArtistContainer} />
            </Router>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;
