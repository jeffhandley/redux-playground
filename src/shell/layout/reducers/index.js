import { combineReducers } from 'redux';
import actions from '../actions';
import uniqueArray from './uniqueArray';
import property from './property';

export default combineReducers({
    leftMenu: property(actions.SET_LEFT_MENU),
    pageTitle: property(actions.SET_PAGE_TITLE),
    requiredCss: uniqueArray(actions.REQUIRE_CSS),
    requiredJs: uniqueArray(actions.REQUIRE_JS),
    selectedTopMenu: property(actions.SELECT_TOP_MENU),
    template: property(actions.SET_TEMPLATE),
    useBootstrapLayout: property(actions.USE_BOOTSTRAP_LAYOUT, false),
    useBootstrapFullyResponsive: property(actions.USE_BOOTSTRAP_FULLY_RESPONSIVE, false)
});
