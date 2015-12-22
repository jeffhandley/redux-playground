import React from 'react';

export default (props) => (
    <div id='page-content'>
        { props.children }

        <script dangerouslySetInnerHTML={{__html: props.pageState }} />
    </div>
);
