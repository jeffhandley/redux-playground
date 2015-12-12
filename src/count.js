import { createStore } from 'redux';

export default function count(to) {
    const counter = (state = 0, action) => {
        switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
        }
    }

    let store = createStore(counter);

    for (let i = 0; i < to; i++) {
        store.dispatch( { type: 'INCREMENT' });
    }

    return store.getState();
}
