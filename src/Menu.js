import React from 'react';
import joinClasses from './utils/joinClasses';

export default React.createClass({
    displayName: 'PureMenu',

    propTypes: {
        horizontal: React.PropTypes.bool,
        open: React.PropTypes.bool,
        trigger: React.PropTypes.oneOf(['click', 'enter'])
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

    handleClick() {
        this.setState({open: !this.state.open});
    },

    render() {
        let {className, horizontal, open, trigger, ...props} = this.props;
        let cls = joinClasses(
            'pure-menu', className,
            horizontal && 'pure-menu-horizontal',
            this.state.open && 'pure-menu-open'
        );

        if (!open) {
            if (trigger === 'enter') {
                props.onMouseEnter = this.handleEnter;
                props.onMouseLeave = this.handleLeave;
            }
            else if (trigger === 'click') {
                props.onClick = this.handleClick;
            }
        }

        return <div className={cls} {...props} />;
    }
});
