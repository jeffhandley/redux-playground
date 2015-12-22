import { SET_TITLE } from '../actions';

export default function pageTitle(state = 'Concur Solutions', action) {
    if (action.type === SET_TITLE) {
        return action.title;
    }

    return state;
}
