import React from 'react';
import Fluxible from 'fluxible';
import provideContext from 'fluxible-addons-react/provideContext';
import Page from './components/Page';
import * as actions from './actions';

const component = provideContext(Page, {
    layout: React.PropTypes.shape({
        requireJs: React.PropTypes.func.isRequired
    }).isRequired
});

const app = new Fluxible({ component });

app.plug({
    name: 'Mars',

    plugContext(options, context, app) {
        return {
            plugComponentContext(componentContext, context, app) {
                componentContext.layout = context.layout;
            }
        }
    }
});

function noInit(actionContext, payload, done) {
    done();
}

const context = app.createContext();

export function provideLayout(layout) {
    context.layout = layout;
}

export function load(req, callback) {
    context.executeAction(actions.init || noInit, req, () => {
        const state = app.dehydrate(context);

        const element = React.createElement(context.getComponent(), {
            context: context.getComponentContext()
        });

        callback(element, state);
    });
}
