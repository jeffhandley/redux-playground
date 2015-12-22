import React from 'react';
import createFluxiblePage from './createFluxiblePage';

let _ = {
    forEach: require('lodash/collection/forEach')
};

function noLoad(actionContext, payload, done) {
    done();
}

export default function loadFluxiblePage(Page, req, actions, stores, callback) {
    const page = createFluxiblePage(Page, req.shell);

    // Register the stores for handling events
    _.forEach(stores, (store) => page.registerStore(store));

    // Create the page context and execute the load action
    const context = page.createContext();

    context.executeAction(actions.load || noLoad, req, () => {
        const state = page.dehydrate(context);
        const Page = page.getComponent();
        const componentContext = context.getComponentContext();

        callback((<Page context={componentContext} />), state);
    });
}
