import url from 'url';

export default function pathname(req, res, next) {
    req.pathname = url.parse(req.url).pathname;
    next();
}
