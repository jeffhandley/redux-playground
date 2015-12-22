import createShell from './createShell';

export default function useShell(req, res, next) {
    req.shell = createShell(req);
    next();
}
