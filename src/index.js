import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import shell from './Shell/express-middleware';

let app = express();
app.use(shell);

function requireCommonJs({ shell }, res, next) {
    shell.layout.requireJs('Common.js');
    next();
}

app.use(requireCommonJs);

app.get('/', (req, res) => {
    let { loadPage } = require('./pages/Mars');

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
