import React from 'react';
import classNames from 'classnames';

export default class PureMenuItem extends React.Component {
    render() {
        const {allowHover, className, disabled, hasChildren, selected, ...props} = this.props;
        const cls = classNames(
            'pure-menu-item', className,
            allowHover && 'pure-menu-allow-hover',
            disabled && 'pure-menu-disabled',
            hasChildren && 'pure-menu-has-children',
            selected && 'pure-menu-selected'
        );

        return <li className={cls} {...props} />;
    }
}

PureMenuItem.propType = {
    allowHover: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    hasChildren: React.PropTypes.bool,
    selected: React.PropTypes.bool
};

PureMenuItem.defaultProps = {
    allowHover: false,
    disabled: false,
    hasChildren: false,
    selected: false
};
