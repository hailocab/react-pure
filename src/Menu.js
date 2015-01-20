import React from 'react';
import joinClasses from './utils/joinClasses';

export default React.createClass({
    displayName: 'PureMenu',

    propTypes: {
        horizontal: React.PropTypes.bool,
        open: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            horizontal: false,
            open: false
        };
    },

    getInitialState() {
        return {
            open: this.props.open
        };
    },

    handleEnter() {
        this.setState({open: true});
    },

    handleLeave() {
        this.setState({open: false});
    },

    render() {
        let {className, horizontal, open, ...props} = this.props;
        let cls = joinClasses(
            'pure-menu', className,
            horizontal && 'pure-menu-horizontal',
            this.state.open && 'pure-menu-open'
        );

        if (!open) {
            props.onMouseEnter = this.handleEnter;
            props.onMouseLeave = this.handleLeave;
        }

        return <div className={cls} {...props} />;
    }
});
