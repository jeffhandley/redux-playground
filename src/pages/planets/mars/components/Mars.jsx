import React from 'react';
import LayoutPropTypes from '../../../../Shell/layout/PropTypes';
import Moons from '../../Moons';

export default React.createClass({
    displayName: 'Mars',

    contextTypes: {
        layout: React.PropTypes.object.isRequired
    },

    componentWillMount() {
        const { layout } = this.context;

        layout.requireJs('/static/pages/planets/mars/client.js');
        layout.setPageTitle('Mars');
        layout.setLeftMenu('Mars-Admin');
        layout.selectTopMenu('Planets');
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
