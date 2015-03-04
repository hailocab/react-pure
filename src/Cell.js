import React from 'react';
import classNames from 'classnames';

const normalizeSize = (s = '') => s.toString().replace('/', '-');

export default class PureCell extends React.Component {
    render() {
        const {className, size, sm, md, lg, xl, ...props} = this.props;
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

PureCell.propTypes = {
    size: React.PropTypes.string,
    sm: React.PropTypes.string,
    md: React.PropTypes.string,
    lg: React.PropTypes.string,
    xl: React.PropTypes.string
};

PureCell.defaultProps = {
    size: '1'
};
