import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class PureMenu extends Component {
    static propTypes = {
        horizontal: PropTypes.bool,
        scrollable: PropTypes.bool
    };

    static defaultProps = {
        horizontal: false,
        scrollable: false
    };

    render() {
        const { className, horizontal, scrollable, ...props } = this.props;
        const cls = classNames(
            'pure-menu', className,
            horizontal && 'pure-menu-horizontal',
            scrollable && 'pure-menu-scrollable'
        );

        return <div className={cls} {...props} />;
    }
}
