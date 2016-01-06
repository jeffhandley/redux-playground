import React from 'react';
import ReactDOMServer from 'react-dom/server'

export default function server(store) {
    return {
        renderPage(page) {
            // Rendering the page body will populate the store's state
            const body = ReactDOMServer.renderToString(page);

            // Once the body has been rendered, we grab a copy of the state
            const state = store.getState();

            const props = {...state, body};

            // Respect the page template specified in state; default to FullPage
            const template = React.createElement(
                state.layout.template || require('./templates/FullPage').default,
                props
            );

            return ReactDOMServer.renderToStaticMarkup(template);
        }
    }
}