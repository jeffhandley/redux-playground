import express from 'express';
import * as Shell from './Shell';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

let app = express();

app.get('/', (req, res) => {
    Shell.layout.requireJs('Common.js');

    let page = require('./pages/Mars');

    page.provideLayout(Shell.layout);

    page.load(req, (pageComponent, state) => {
        let innerHtml = ReactDOMServer.renderToString(pageComponent);
        let html = ReactDOMServer.renderToString(<Shell.Application {...{innerHtml}} />);
        res.send(html);
    });

});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
