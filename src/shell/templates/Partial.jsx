import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default React.createClass({
    displayName: 'Partial',

    propTypes: {
        children: React.PropTypes.element,
        html: React.PropTypes.string,
        id: React.PropTypes.string,
        tag: React.PropTypes.string
    },

    render() {
        const tag = this.props.tag || 'div';

        const __html = this.props.html ||
            (this.props.children && ReactDOMServer.renderToString(this.props.children));

        const props = {
            dangerouslySetInnerHTML: { __html },
            id: this.props.id
        }

        return React.createElement(tag, props);
    }
});
