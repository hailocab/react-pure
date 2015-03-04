import React from 'react';
import classNames from 'classnames';

export default class PureButton extends React.Component {
    render() {
        const {className, href, active, disabled, primary, size, ...props} = this.props;
        const cls = classNames(
            'pure-button', className,
            active && 'pure-button-active',
            disabled && 'pure-button-disabled',
            primary && 'pure-button-primary',
            size && 'pure-button-' + size
        );

        return href
            ? <a href={href} className={cls} {...props} />
            : <button className={cls} disabled={disabled} {...props} />;
    }
}

PureButton.propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    size: React.PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge'])
};

PureButton.defaultProps = {
    active: false,
    disabled: false,
    primary: false
};
