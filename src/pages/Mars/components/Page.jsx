import React from 'react';

export default React.createClass({
    displayName: 'Mars',

    contextTypes: {
        layout: React.PropTypes.shape({
            requireJs: React.PropTypes.func.isRequired,
            setPageTitle: React.PropTypes.func.isRequired
        }).isRequired
    },

    componentWillMount() {
        this.context.layout.requireJs('Mars-Client.js');
        this.context.layout.setPageTitle('Mars');
        this.context.layout.setLeftMenu('Mars-Admin');
        this.context.layout.selectTopMenu('Planets');
    },

    render() {
        return (
            <div>
                We're on Mars!
            </div>
        );
    }
});
