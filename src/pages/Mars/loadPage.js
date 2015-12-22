import React from 'react';
import * as actions from './actions';

function noInit(actionContext, payload, done) {
    done();
}

export default function loadPage(page, req, callback) {
    const context = page.createContext();

    context.executeAction(actions.init || noInit, req, () => {
        const state = page.dehydrate(context);
        const Page = page.getComponent();
        const componentContext = context.getComponentContext();

        callback((<Page context={componentContext} />), state);
    });
}
