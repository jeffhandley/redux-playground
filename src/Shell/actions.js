export const ADD_TOP_MENU_ITEM = 'ADD_TOP_MENU_ITEM';
export const REQUIRE_JS = 'REQUIRE_JS';

export function addTopMenuItem(item) {
    return {
        type: ADD_TOP_MENU_ITEM,
        item
    }
}

export function requireJs(file) {
    return {
        type: REQUIRE_JS,
        file
    }
}
