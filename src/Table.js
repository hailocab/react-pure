import React from 'react';
import classNames from 'classnames';

export default class PureTable extends React.Component {
    render() {
        const {className, bordered, horizontal, striped, ...props} = this.props;
        const cls = classNames(
            'pure-table', className,
            bordered && 'pure-table-bordered',
            horizontal && 'pure-table-horizontal',
            striped && 'pure-table-striped'
        );

        return <table className={cls} {...props} />;
    }
};

PureTable.propTypes = {
    bordered: React.PropTypes.bool,
    horizontal: React.PropTypes.bool,
    striped: React.PropTypes.bool
};

PureTable.defaultProps = {
    bordered: false,
    horizontal: false,
    striped: false
};
