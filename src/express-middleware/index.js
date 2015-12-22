import pathname from './pathname';
import logRequest from './logRequest';

import shell from '../Shell/express-middleware';
import commonjs from './commonjs';

export default [
    pathname,
    logRequest,
    shell,
    commonjs
];
