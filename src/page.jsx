import React from 'react';
import count from './count';

export default React.createClass({
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <button onclick={this.props.onIncrement}>+</button>
                    We counted to {this.props.counter}.
                    <div className='content'>
                        {this.props.children}
                    </div>
                </body>
            </html>
        );
    }
});
