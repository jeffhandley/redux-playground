import express from 'express';
import * as Shell from './Shell';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

let app = express();

app.get('/', (req, res) => {
    Shell.requireJs('foo.js');

    let html = ReactDOMServer.renderToString(<Shell.Root />);
    res.send(html);
});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
