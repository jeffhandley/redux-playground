import express from 'express';
import middleware from './express-middleware';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

let app = express();
app.use(middleware);

app.get('*', (req, res) => {
    let { loadPage } = require('./pages' + req.pathname);

    loadPage(req, (page) => {
        let pageHtml = ReactDOMServer.renderToString(page);
        let { Application } = req.shell;

        let html = ReactDOMServer.renderToString(
            <Application {...{pageHtml}} />
        );

        res.send(html);
    });

});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
