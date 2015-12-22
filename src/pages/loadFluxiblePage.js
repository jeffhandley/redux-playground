import React from 'react';
import Container from './Container';
import createFluxiblePage from './createFluxiblePage';
import connectToStores from 'fluxible-addons-react/connectToStores';

let _ = {
    forEach: require('lodash/collection/forEach')
};

function noLoad(actionContext, payload, done) {
    done();
}

export default function loadFluxiblePage(Page, req, actions, stores, mapStoresToProps, callback) {
    const ConnectedPage = connectToStores(
        Page,
        stores,
        mapStoresToProps
    );

    const page = createFluxiblePage(ConnectedPage, req.shell);

    // Register the stores for handling events
    _.forEach(stores, (store) => page.registerStore(store));

    // Create the page context and execute the load action
    const pageContext = page.createContext();

    pageContext.executeAction(actions.load || noLoad, req, () => {
        const Page = page.getComponent();
        const context = pageContext.getComponentContext();

        const state = page.dehydrate(pageContext);
        const pageState = `
            window.PAGE_STATE = ${JSON.stringify(state)};
        `;

        callback((
            <Container {...{pageState}}>
                <Page {...{context}} />
            </Container>
        ), state);
    });
}
