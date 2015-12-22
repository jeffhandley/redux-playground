export default function commonjs({ shell }, res, next) {
    shell.layout.requireJs('Common.js');
    next();
}
