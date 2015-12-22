import Page from './components/Page';
import loadFluxiblePage from '../loadFluxiblePage';
import connectToStores from 'fluxible-addons-react/connectToStores';
import store from './store';
import * as actions from './actions';

const stores = [ store ];

export function loadPage(req, callback) {
    const ConnectedPage = connectToStores(
        Page,
        stores,
        (context, props) => ({
            moons: context.getStore(store).getMoons()
        })
    );

    return loadFluxiblePage(
        ConnectedPage,
        req,
        actions,
        stores,
        callback
    );
}
