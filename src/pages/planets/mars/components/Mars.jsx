import React from 'react';
import LayoutPropTypes from '../../../../Shell/layout/PropTypes';
import Moons from '../../Moons';
import setLayout from '../setLayout';

export default React.createClass({
    displayName: 'Mars',

    contextTypes: {
        layout: LayoutPropTypes.actions
    },

    componentWillMount() {
        const { layout } = this.context;
        setLayout(layout);
    },

    render() {
        let { moons } = this.props;

        return (
            <div>
                We're on Mars!
                <Moons {...{moons}} />
            </div>
        );
    }
});
