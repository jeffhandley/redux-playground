import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default React.createClass({
    displayName: 'Root',

    render() {
        const state = this.props.store.getState();
        console.log('state', state);

        return (
            <Provider store={this.props.store}>
                <html>
                    <head>
                        <title>{state.pageTitle}</title>
                    </head>
                    <body>
                        { state.requireJs && !!state.requireJs.length && (
                            <div>
                                Required JS Files:
                                <ol>
                                    { state.requireJs.map((file) => (<li key={file}>{file}</li>)) }
                                </ol>
                            </div>
                        ) }
                        <div>TOP NAV</div>
                        { this.props.innerHtml && (<div dangerouslySetInnerHTML={{__html: this.props.innerHtml}} />) }
                    </body>
                </html>
            </Provider>
        );
    }
});
