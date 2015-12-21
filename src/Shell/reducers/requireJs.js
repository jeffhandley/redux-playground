import { REQUIRE_JS } from '../actions';
let _ = {
    isArray: require('lodash/lang/isArray'),
    union: require('lodash/array/union')
};

export default function requireJs(state = [], action) {
    if (action.type !== REQUIRE_JS || !action.file) {
        return state;
    }

    let files = action.file;

    if (!_.isArray(files)) {
        files = [ files ];
    }

    return _.union(state, files);
}