import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class PureButton extends Component {
    static propTypes = {
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        primary: PropTypes.bool
    };

    static defaultProps = {
        active: false,
        disabled: false,
        primary: false
    };

    render() {
        const { className, href, active, disabled, primary, ...props } = this.props;
        const cls = classNames(
            'pure-button', className,
            active && 'pure-button-active',
            disabled && 'pure-button-disabled',
            primary && 'pure-button-primary'
        );

        return href
            ? <a href={href} className={cls} {...props} />
            : <button className={cls} disabled={disabled} {...props} />;
    }
}
