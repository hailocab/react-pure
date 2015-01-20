import React from 'react';
import joinClasses from './utils/joinClasses';

export default React.createClass({
    displayName: 'PureCell',

    propTypes: {
        size: React.PropTypes.string,
        sm: React.PropTypes.string,
        md: React.PropTypes.string,
        lg: React.PropTypes.string,
        xl: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            size: '1'
        };
    },

    render() {
        var {className, size, sm, md, lg, xl, ...props} = this.props;
        var cls = joinClasses([
            'pure-u-'  + size.replace('/', '-'),
            sm && 'pure-u-sm-'  + sm.replace('/', '-'),
            md && 'pure-u-md-'  + md.replace('/', '-'),
            lg && 'pure-u-lg-'  + lg.replace('/', '-'),
            xl && 'pure-u-xl-'  + xl.replace('/', '-'),
            className
        ]);

        return <div className={cls} {...props}></div>;
    }
});
