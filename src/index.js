import express from 'express';
import count from './count';
import url from 'url';

let app = express();

app.get('/', (req, res) => {
    let value = count(url.parse(req.url).query || 0);
    res.send(`We counted to ${value}`);
});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
});
