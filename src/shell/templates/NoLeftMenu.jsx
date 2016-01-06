import React from 'react';
import ReactDOMServer from 'react-dom/server';
import LayoutPropTypes from '../layout/PropTypes';
import Partial from './Partial';
import * as Shell from '../components';

export default React.createClass({
    displayName: 'NoLeftMenu',

    propTypes: {
        body: React.PropTypes.string,
        footer: React.PropTypes.element,
        head: React.PropTypes.element,
        layout: LayoutPropTypes.state,
        pageHeading: React.PropTypes.element,
        topNav: React.PropTypes.element
    },

    render() {
        let notSpecified;

        const { layout } = this.props;

        const partials = {
            footer: this.props.footer === notSpecified ?
                <Shell.Footer {...{layout}} /> :
                this.props.footer,
            topNav: this.props.topNav === notSpecified ?
                <Shell.TopNav {...{layout}} /> :
                this.props.topNav,
            pageHeading: this.props.pageHeading === notSpecified ?
                <Shell.PageHeading>{layout.pageTitle}</Shell.PageHeading> :
                this.props.pageHeading,
            head: this.props.head === notSpecified ?
                Shell.getHeadContent({layout}) :
                this.props.head
        };

        return (
            <html>
                <Partial html={partials.head} tag='head' />
                <body>
                    <div id='shell-page'>
                        <Partial id='shell-top-nav'>{partials.topNav}</Partial>
                        <div>
                            <Partial id='shell-page-heading'>{partials.pageHeading}</Partial>
                            <Partial html={this.props.body} id='shell-page-body' />
                        </div>
                    </div>
                    <Partial id='shell-footer'>{partials.footer}</Partial>
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
