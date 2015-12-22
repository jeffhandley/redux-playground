export default function logRequest(req, res, next) {
    console.log(req.pathname);
    next();
}
