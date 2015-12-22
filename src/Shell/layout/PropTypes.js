import React from 'react';

export default {
    actions: React.PropTypes.shape({
        setLeftMenu: React.PropTypes.func.isRequired,
        setPageTitle: React.PropTypes.func.isRequired,
        requireCss: React.PropTypes.func.isRequired,
        requireJs: React.PropTypes.func.isRequired,
        selectTopMenu: React.PropTypes.func.isRequired,
        useBootstrapLayout: React.PropTypes.func.isRequired,
        useBootstrapFullyResponsive: React.PropTypes.func.isRequired
    }).isRequired,
    state: React.PropTypes.shape({
        leftMenu: React.PropTypes.string,
        pageTitle: React.PropTypes.string,
        requiredCss: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        requiredJs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        selectedTopMenu: React.PropTypes.string,
        useBootstrapLayout: React.PropTypes.bool.isRequired,
        useBootstrapFullyResponsive: React.PropTypes.bool.isRequired
    }).isRequired
};