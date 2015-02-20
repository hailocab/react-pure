"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var joinClasses = _interopRequire(require("./utils/joinClasses"));

module.exports = React.createClass({
    displayName: "PureCell",

    propTypes: {
        size: React.PropTypes.string,
        sm: React.PropTypes.string,
        md: React.PropTypes.string,
        lg: React.PropTypes.string,
        xl: React.PropTypes.string
    },

    getDefaultProps: function getDefaultProps() {
        return {
            size: "1"
        };
    },

    render: function render() {
        var _props = this.props;
        var className = _props.className;
        var size = _props.size;
        var sm = _props.sm;
        var md = _props.md;
        var lg = _props.lg;
        var xl = _props.xl;
        var props = _objectWithoutProperties(_props, ["className", "size", "sm", "md", "lg", "xl"]);

        var cls = joinClasses("pure-u-" + size.replace("/", "-"), sm && "pure-u-sm-" + sm.replace("/", "-"), md && "pure-u-md-" + md.replace("/", "-"), lg && "pure-u-lg-" + lg.replace("/", "-"), xl && "pure-u-xl-" + xl.replace("/", "-"), className);

        return React.createElement("div", _extends({ className: cls }, props));
    }
});