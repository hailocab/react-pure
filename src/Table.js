import React from 'react';
import joinClasses from './utils/joinClasses';

export default React.createClass({
    displayName: 'PureTable',

    propTypes: {
        bordered: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        striped: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            bordered: false,
            horizontal: false,
            striped: false
        };
    },

    render() {
        var {className, bordered, horizontal, striped, ...props} = this.props;
        var cls = joinClasses(
            'pure-table', className,
            bordered && 'pure-table-bordered',
            horizontal && 'pure-table-horizontal',
            striped && 'pure-table-striped'
        );

        return <table className={cls} {...props} />;
    }
});
