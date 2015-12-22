import React from 'react';
import LayoutPropTypes from '../../../../Shell/layout/PropTypes';
import Moons from '../../Moons';

export default React.createClass({
    displayName: 'Earth',

    contextTypes: {
        layout: React.PropTypes.object.isRequired
    },

    componentWillMount() {
        const { layout } = this.context;

        layout.requireJs('/static/pages/planets/earth/client.js');
        layout.setPageTitle('Earth');
        layout.setLeftMenu('Earth-Admin');
        layout.selectTopMenu('Planets');
    },

    render() {
        let { moons } = this.props;

        return (
            <div>
                We're on Earth!
                <Moons {...{moons}} />
            </div>
        );
    }
});
