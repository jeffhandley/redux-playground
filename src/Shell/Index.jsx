import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import * as actions from './actions';

const store = configureStore();

export class Root extends Component {
    render() {
        const state = store.getState();

        return (
            <Provider store={store}>
                <html>
                    <head>
                        <title>{this.props.pageTitle}</title>
                    </head>
                    <body>
                        { state.requireJs && !!state.requireJs.length && (
                            <div>
                                Required JS Files:
                                <ol>
                                    { state.requireJs.map((file) => (<li>{file}</li>)) }
                                </ol>
                            </div>
                        ) }
                        <div>TOP NAV</div>
                        {this.props.children}
                    </body>
                </html>
            </Provider>
        );
    }
}

export function addTopMenuItem(item) {
    store.dispatch(actions.addTopMenuItem(item));
}

export function requireJs(file) {
    store.dispatch(actions.requireJs(file));
}
