import React from 'react';
import Partial from './Partial';
import LayoutPropTypes from '../layout/PropTypes';

export default React.createClass({
    displayName: 'Application',

    propTypes: {
        body: React.PropTypes.string,
        footer: React.PropTypes.string,
        head: React.PropTypes.string,
        layout: LayoutPropTypes.state,
        leftMenu: React.PropTypes.string,
        pageHeading: React.PropTypes.string,
        topNav: React.PropTypes.string
    },

    render() {
        const { layout } = this.props;

        return (
            <html>
                <head dangerouslySetInnerHTML={{__html: this.props.head}} />
                <body>
                    <div id='shell-page'>
                        <Partial html={this.props.topNav} id='shell-top-nav' />
                        <Partial html={this.props.leftMenu} id='shell-left-menu' />
                        <div>
                            <Partial html={this.props.pageHeading} id='shell-page-heading' />
                            <Partial html={this.props.body} id='shell-page-body' />
                        </div>
                    </div>
                    <Partial html={this.props.footer} id='shell-footer' />
                    <div id='shell-requiredjs'>
                        { layout.requiredJs && layout.requiredJs.map((js, i) => (
                            <script src={js} key={i} />
                        )) }
                    </div>
                </body>
            </html>
        );
    }
});
