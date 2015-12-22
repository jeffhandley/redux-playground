import React from 'react';

export default React.createClass({
    displayName: 'Mars',

    contextTypes: {
        layout: React.PropTypes.shape({
            requireJs: React.PropTypes.func.isRequired
        }).isRequired
    },

    render() {
        this.context.layout.requireJs('Mars-Client.js');
        this.context.layout.setTitle('Mars');

        return (
            <div>
                We're on Mars!
            </div>
        );
    }
});
