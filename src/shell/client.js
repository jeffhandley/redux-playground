import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import configureStore from './configureStore';
import layoutActionCreators from './layout/actionCreators';
import PageHeading from './components/PageHeading';
import Footer from './components/Footer';

const store = configureStore(window.SHELL_STATE);
const layout = bindActionCreators(
    layoutActionCreators,
    store.dispatch
);

const containers = {
    title: document.getElementById('shell-head-title'),
    pageHeading: document.getElementById('shell-page-heading'),
    footer: document.getElementById('shell-footer')
};

const render = () => {
    const state = store.getState();
    const title = state.layout.pageTitle;

    containers.title.innerText = title;

    ReactDOM.render(
        (<PageHeading>{ title }</PageHeading>),
        containers.pageHeading
    );

    ReactDOM.render(
        (<Footer />),
        containers.footer
    );
}

store.subscribe(render);
render();

window.Shell = {
    layout
};
