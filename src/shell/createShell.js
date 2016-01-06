import React from 'react';
import { bindActionCreators } from 'redux';

import configureStore from './configureStore';
import layoutActionCreators from './layout/actionCreators';

import layoutPropTypes from './layout/PropTypes';
import server from './server';

export default function createShell(req) {
    const store = configureStore();

    const serverInstance = server(store);

    const layout = bindActionCreators(
        layoutActionCreators,
        store.dispatch
    );

    return {
        layout,
        layoutActionPropTypes: layoutPropTypes.actions,
        renderPage: serverInstance.renderPage
    };
}
