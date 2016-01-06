import React from 'react';

export default React.createClass({
    displayName: 'Partial',

    propTypes: {
        html: React.PropTypes.string,
        id: React.PropTypes.string.isRequired
    },

    render() {
        const { html, id } = this.props;

        return (
            <div dangerouslySetInnerHTML={{ __html: html }} id={ id } />
        );
    }
});
