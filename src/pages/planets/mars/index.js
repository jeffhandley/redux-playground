import Mars from './components/Mars';
import loadFluxiblePage from '../../loadFluxiblePage';
import store from '../planetStore';
import * as actions from './actions';

export function loadPage(req, callback) {
    return loadFluxiblePage(
        Mars,
        req,
        actions,
        [ store ],
        (context, props) => ({
            moons: context.getStore(store).getMoons()
        }),
        callback
    );
}
