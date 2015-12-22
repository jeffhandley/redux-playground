import express from 'express';
import middleware from './express-middleware';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

let app = express();
app.use(middleware);

app.get('*', (req, res) => {
    let { loadPage } = require('./pages' + req.pathname);

    loadPage(req, (page, pageState) => {
        let pageHtml = ReactDOMServer.renderToString(page);

        let html = ReactDOMServer.renderToString(
            React.createElement(req.shell.Application, {
                pageHtml,
                pageState
            })
        );

        res.send(html);
    });

});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
