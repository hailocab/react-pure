import React from 'react';
import classNames from 'classnames';

export default class PureMenu extends React.Component {
    render() {
        const {className, horizontal, scrollable, ...props} = this.props;
        const cls = classNames(
            'pure-menu', className,
            horizontal && 'pure-menu-horizontal',
            scrollable && 'pure-menu-scrollable'
        );

        return <div className={cls} {...props} />;
    }
}

PureMenu.propTypes = {
    horizontal: React.PropTypes.bool,
    scrollable: React.PropTypes.bool
};

PureMenu.defaultProps = {
    horizontal: false,
    scrollable: false
};
