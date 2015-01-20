import React from 'react';
import joinClasses from './utils/joinClasses';

export default React.createClass({
    displayName: 'PureButton',

    propTypes: {
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        size: React.PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])
    },

    getDefaultProps() {
        return {
            active: false,
            disabled: false,
            primary: false
        };
    },

    render() {
        var {className, href, active, disabled, primary, size, ...props} = this.props;
        var cls = joinClasses(
            'pure-button', className,
            active && 'pure-button-active',
            disabled && 'pure-button-disabled',
            primary && 'pure-button-primary',
            size && 'pure-button-' + size
        );

        return href
            ? <a href={href} className={cls} {...props}></a>
            : <button className={cls} {...props}></button>;
    }
});
