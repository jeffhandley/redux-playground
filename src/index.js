import express from 'express';
import count from './count';
import url from 'url';
import page from './page';
import ReactDOMServer from 'react-dom/server';

let app = express();

app.get('/', (req, res) => {
    let countTo = url.parse(req.url).query;
    let component = page(countTo);

    res.send(ReactDOMServer.renderToString(component));
});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
