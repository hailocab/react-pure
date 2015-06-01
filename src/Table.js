import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class PureTable extends Component {
    static propTypes = {
        bordered: PropTypes.bool,
        horizontal: PropTypes.bool,
        striped: PropTypes.bool
    };

    static defaultProps = {
        bordered: false,
        horizontal: false,
        striped: false
    };

    render() {
        const { className, bordered, horizontal, striped, ...props } = this.props;
        const cls = classNames(
            'pure-table', className,
            bordered && 'pure-table-bordered',
            horizontal && 'pure-table-horizontal',
            striped && 'pure-table-striped'
        );

        return <table className={cls} {...props} />;
    }
}
