import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayoutPropTypes from './layout/PropTypes';

const Root = React.createClass({
    displayName: 'Root',

    propTypes: {
        layout: LayoutPropTypes.state,
        pageHtml: React.PropTypes.string.isRequired,
        pageState: React.PropTypes.object
    },

    render() {
        const { layout } = this.props;

        return (
            <html>
                <head>
                    <title>{layout.pageTitle}</title>
                </head>
                <body>
                    { layout.requiredJs && !!layout.requiredJs.length && (
                        <div>
                            Required JS Files:
                            <ol>
                                { layout.requiredJs.map((file) => (<li key={file}>{file}</li>)) }
                            </ol>
                        </div>
                    ) }
                    <div>Selected Top Menu: { layout.selectedTopMenu }</div>
                    <div>Left Menu: { layout.leftMenu }</div>
                    <div>
                        <h1>{layout.pageTitle}</h1>
                        { this.props.pageHtml && (<div dangerouslySetInnerHTML={{__html: this.props.pageHtml}} />) }
                    </div>
                </body>
            </html>
        );
    }
});

const mapStateToProps = (state) => ({
    layout: state.layout
});

export default connect(mapStateToProps)(Root);
