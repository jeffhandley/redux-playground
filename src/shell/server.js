import React from 'react';
import ReactDOMServer from 'react-dom/server'
import Application from './components/Application';
import getHeadContent from './components/getHeadContent';
import TopNav from './components/TopNav';
import LeftMenu from './components/LeftMenu';
import PageHeading from './components/PageHeading';
import Footer from './components/Footer';

export default function server(store) {
    return {
        renderPage(page) {
            const body = ReactDOMServer.renderToString(page);

            let state = store.getState();
            let { layout } = state;

            const props = {
                head: getHeadContent({ state }),
                topNav: ReactDOMServer.renderToString(<TopNav {...{layout}} />),
                leftMenu: ReactDOMServer.renderToString(<LeftMenu {...{layout}} />),
                pageHeading: ReactDOMServer.renderToString(<PageHeading>{layout.pageTitle}</PageHeading>),
                footer: ReactDOMServer.renderToString(<Footer {...{layout}} />),
                layout,
                body
            };

            return ReactDOMServer.renderToStaticMarkup(
                <Application {...props} />
            );
        }
    }
}