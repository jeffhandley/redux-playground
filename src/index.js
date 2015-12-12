import express from 'express';
import App from './App';
import url from 'url';
import ReactDOMServer from 'react-dom/server';

let app = express();

app.get('/', (req, res) => {
    let state = {
        counter: url.parse(req.url).query,
        title: 'Redux Shell'
    };

    let app = App(state);
    let html = ReactDOMServer.renderToString(app);
    res.send(html);
});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
