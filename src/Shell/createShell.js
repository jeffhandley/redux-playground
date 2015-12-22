import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import layoutActionCreators from './layout/actionCreators';

import layoutPropTypes from './layout/PropTypes';
import Root from './Root';

export default function createShell(req) {
    const store = configureStore();

    const layout = bindActionCreators(layoutActionCreators, store.dispatch);

    const Application = (props) => (
        <Provider store={store}>
            <Root {...props} />
        </Provider>
    );

    return {
        Application,
        layout,
        layoutActionPropTypes: layoutPropTypes.actions
    };
}
