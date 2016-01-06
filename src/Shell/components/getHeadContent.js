import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default (props) => {
    const { state } = props;
    const { layout } = state;

    const shellState = `
        window.SHELL_STATE = ${JSON.stringify(state)};
    `;

    const children = [
        <title id='shell-head-title'>{ layout.pageTitle }</title>,
        <script dangerouslySetInnerHTML={{__html: shellState}} />
    ].concat(props.children || [ ]);

    return children.reduce(
        (previous, child) => previous + ReactDOMServer.renderToStaticMarkup(child),
        ''
    );
};
