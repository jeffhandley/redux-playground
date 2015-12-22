import React from 'react';
import createPage from './createPage';
import * as actions from './actions';

function noInit(actionContext, payload, done) {
    done();
}

export function loadPage(req, callback) {
    const page = createPage(req.shell);
    const context = page.createContext();

    context.executeAction(actions.init || noInit, req, () => {
        const state = page.dehydrate(context);
        const Page = page.getComponent();
        const componentContext = context.getComponentContext();

        callback((<Page context={componentContext} />), state);
    });
}
