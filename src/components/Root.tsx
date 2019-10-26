
// global dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import SearchBoxContainer from '../containers/SearchBoxContainer';
import ArtistContainer from '../containers/ArtistContainer';

function Root(props: any) {

    const { store, history } = props;

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="container">
                    <SearchBoxContainer />
                    <Route path="/artist/:id" component={ArtistContainer} />
                </div>
            </ConnectedRouter>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;