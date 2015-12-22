import React, { Component } from 'react';
import configureStore from './configureStore';
import Root from './Root';
import * as actions from './actions';

const store = configureStore();

export class Application extends Component {
    render() {
        return (<Root {...this.props} store={store} />);
    }
}

export const layout = {
    addTopMenuItem(item) {
        store.dispatch(actions.addTopMenuItem(item));
    },

    requireJs(file) {
        store.dispatch(actions.requireJs(file));
    },

    setTitle(title) {
        store.dispatch(actions.setTitle(title));
    }
};
