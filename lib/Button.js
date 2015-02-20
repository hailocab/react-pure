"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var joinClasses = _interopRequire(require("./utils/joinClasses"));

module.exports = React.createClass({
    displayName: "PureButton",

    propTypes: {
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        size: React.PropTypes.oneOf(["xsmall", "small", "large", "xlarge"])
    },

    getDefaultProps: function getDefaultProps() {
        return {
            active: false,
            disabled: false,
            primary: false
        };
    },

    render: function render() {
        var _props = this.props;
        var className = _props.className;
        var href = _props.href;
        var active = _props.active;
        var disabled = _props.disabled;
        var primary = _props.primary;
        var size = _props.size;
        var props = _objectWithoutProperties(_props, ["className", "href", "active", "disabled", "primary", "size"]);

        var cls = joinClasses("pure-button", className, active && "pure-button-active", disabled && "pure-button-disabled", primary && "pure-button-primary", size && "pure-button-" + size);

        return href ? React.createElement("a", _extends({ href: href, className: cls }, props)) : React.createElement("button", _extends({ className: cls, disabled: disabled }, props));
    }
});