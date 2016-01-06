import serveShellClient from './serveShellClient';
import provideShell from './provideShell';

export default function(shellClientPath = '/shell') {
    return [
        serveShellClient(shellClientPath),
        provideShell(shellClientPath)
    ];
}
