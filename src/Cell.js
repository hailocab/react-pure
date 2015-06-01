import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const normalizeSize = (s = '') => s.toString().replace('/', '-');

export default class PureCell extends Component {
    static propTypes = {
        size: PropTypes.string,
        sm: PropTypes.string,
        md: PropTypes.string,
        lg: PropTypes.string,
        xl: PropTypes.string
    };

    static defaultProps = {
        size: '1'
    };

    render() {
        const { className, size, sm, md, lg, xl, ...props } = this.props;
        const cls = classNames(
            'pure-u-' + normalizeSize(size),
            sm && 'pure-u-sm-' + normalizeSize(sm),
            md && 'pure-u-md-' + normalizeSize(md),
            lg && 'pure-u-lg-' + normalizeSize(lg),
            xl && 'pure-u-xl-' + normalizeSize(xl),
            className
        );

        return <div className={cls} {...props} />;
    }
}
