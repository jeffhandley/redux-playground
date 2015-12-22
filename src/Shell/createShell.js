import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import layoutActionCreators from './layout/actionCreators';

import layoutPropTypes from './layout/PropTypes';
import Application from './Application';

export default function createShell(req) {
    const store = configureStore();

    const layout = bindActionCreators(
        layoutActionCreators,
        store.dispatch
    );

    const application = (props) => (
        <Provider store={store}>
            <Application {...props} />
        </Provider>
    );

    return {
        Application: application,
        layout,
        layoutActionPropTypes: layoutPropTypes.actions
    };
}
