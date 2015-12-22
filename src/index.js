import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import createShell from './Shell/createShell';

let app = express();

app.get('/', (req, res) => {
    let shell = createShell(req);
    shell.layout.requireJs('Common.js');

    let { default: createPage } = require('./pages/Mars/createPage');
    let { default: loadPage } = require('./pages/Mars/loadPage');

    let page = createPage(req, shell);
    loadPage(page, req, (pageComponent, pageState) => {
        let innerHtml = ReactDOMServer.renderToString(pageComponent);
        let html = ReactDOMServer.renderToString(<shell.Application {...{innerHtml}} />);
        res.send(html);
    });

});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
