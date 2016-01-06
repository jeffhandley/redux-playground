import express from 'express';
import path from 'path';

const shellServer = express();
const shellServerPath = path.join(__dirname, '../dist');

export default function serveShellClient(path) {
    shellServer.use(path, express.static(shellServerPath));
    return shellServer;
}
