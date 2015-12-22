import Page from './components/Page';
import loadFluxiblePage from '../../loadFluxiblePage';
import store from '../planetStore';
import * as actions from './actions';

export function loadPage(req, callback) {
    return loadFluxiblePage(
        Page,
        req,
        actions,
        [ store ],
        (context, props) => ({
            moons: context.getStore(store).getMoons()
        }),
        callback
    );
}
