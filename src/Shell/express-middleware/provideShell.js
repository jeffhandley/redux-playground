import createShell from '../createShell';
import path from 'path';

export default function provideShell(shellClientPath) {
    const shellClientJs = path.join(shellClientPath, 'client.js');

    return (req, res, next) => {
        req.shell = createShell(req);
        req.shell.layout.requireJs(shellClientJs);

        next();
    }
}
