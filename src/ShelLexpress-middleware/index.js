import serveShellClient from './serveShellClient';
import provideShell from './provideShell';

export default function(shellClientPath) {
    return [
        serveShellClient(shellClientPath),
        provideShell(shellClientPath)
    ];
}
