import { LOAD_MOONS } from '../../constants';

export function load(actionContext, payload, done) {
    actionContext.dispatch(LOAD_MOONS, [
        'The Moon'
    ]);

    done();
}
