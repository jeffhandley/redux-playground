import React from 'react';
import count from './count';
import Page from './Page';

export default function App(state) {
    let counter = count(state.counter);
    let title = state.title;
    let onIncrement = () => count(counter, { type: 'INCREMENT' });

    return (<Page {...{counter, title, onIncrement}} />);
}