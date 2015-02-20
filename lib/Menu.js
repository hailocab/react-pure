"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var joinClasses = _interopRequire(require("./utils/joinClasses"));

module.exports = React.createClass({
    displayName: "PureMenu",

    propTypes: {
        horizontal: React.PropTypes.bool,
        open: React.PropTypes.bool,
        trigger: React.PropTypes.oneOf(["click", "enter"])
    },

    getDefaultProps: function getDefaultProps() {
        return {
            horizontal: false,
            open: false
        };
    },

    getInitialState: function getInitialState() {
        return {
            open: this.props.open
        };
    },

    handleEnter: function handleEnter() {
        this.setState({ open: true });
    },

    handleLeave: function handleLeave() {
        this.setState({ open: false });
    },

    handleClick: function handleClick() {
        this.setState({ open: !this.state.open });
    },

    render: function render() {
        var _props = this.props;
        var className = _props.className;
        var horizontal = _props.horizontal;
        var open = _props.open;
        var trigger = _props.trigger;
        var props = _objectWithoutProperties(_props, ["className", "horizontal", "open", "trigger"]);

        var cls = joinClasses("pure-menu", className, horizontal && "pure-menu-horizontal", this.state.open && "pure-menu-open");

        if (!open) {
            if (trigger === "enter") {
                props.onMouseEnter = this.handleEnter;
                props.onMouseLeave = this.handleLeave;
            } else if (trigger === "click") {
                props.onClick = this.handleClick;
            }
        }

        return React.createElement("div", _extends({ className: cls }, props));
    }
});