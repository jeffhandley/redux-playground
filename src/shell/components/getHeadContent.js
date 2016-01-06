import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default (props) => {
    const { layout } = props;

    const shellState = `
        window.SHELL_STATE = ${JSON.stringify(props)};
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
