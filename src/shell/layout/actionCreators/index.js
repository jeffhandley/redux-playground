import actions from '../actions';
import uniqueArray from './uniqueArray';
import property from './property';

export default {
    setLeftMenu: property(actions.SET_LEFT_MENU, [ ]),
    setPageTitle: property(actions.SET_PAGE_TITLE),
    requireCss: uniqueArray(actions.REQUIRE_CSS).add,
    requireJs: uniqueArray(actions.REQUIRE_JS).add,
    selectTopMenu: property(actions.SELECT_TOP_MENU),
    setTemplate: property(actions.SET_TEMPLATE),
    useBootstrapLayout: property(actions.USE_BOOTSTRAP_LAYOUT, false),
    useBootstrapFullyResponsive: property(actions.USE_BOOTSTRAP_FULLY_RESPONSIVE, false)
};
