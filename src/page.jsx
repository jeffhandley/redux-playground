import React from 'react';
import count from './count';

let Page = React.createClass({
    render() {
        return (
            <html>
                <body>
                    We counted to {this.props.counter}.
                </body>
            </html>
        );
    }
});

export default function(countTo = 0) {
    let value = count(countTo);
    return <Page counter={value} />;
}
