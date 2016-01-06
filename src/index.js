import express from 'express';
import shellMiddleware from './shell/express-middleware';
import commonMiddleware from './express-middleware';

let app = express();
app.use(shellMiddleware('/shell'));
app.use(commonMiddleware);

app.get('/planets/*', (req, res) => {
    let { loadPage } = require('./pages' + req.pathname);

    loadPage(req, (page) => {
        res.send(req.shell.renderPage(page));
    });

});

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
    console.log('Pages available:');
    console.log('http://localhost:3000/planets/earth');
    console.log('http://localhost:3000/planets/mars');
});
