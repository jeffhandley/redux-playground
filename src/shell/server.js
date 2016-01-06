import React from 'react';
import ReactDOMServer from 'react-dom/server'
import FullPage from './templates/FullPage';

export default function server(store) {
    return {
        renderPage(page) {
            // Rendering the page body will populate the store's state
            const body = ReactDOMServer.renderToString(page);

            // Once the body has been rendered, we grab a copy of the state
            const state = store.getState();

            return ReactDOMServer.renderToStaticMarkup(
                <FullPage {...state} {...{body}} />
            );
        }
    }
}