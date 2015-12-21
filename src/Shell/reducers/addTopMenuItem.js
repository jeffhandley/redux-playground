import { ADD_TOP_MENU_ITEM } from '../actions';

export default function addTopMenuItem(state = [], action) {
    switch (action.type) {
        case ADD_TOP_MENU_ITEM:
            return [...state, item];
        default:
            return state;
    }
}
