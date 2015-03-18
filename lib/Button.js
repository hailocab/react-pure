"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var PureButton = (function (_React$Component) {
    function PureButton() {
        _classCallCheck(this, PureButton);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureButton, _React$Component);

    _createClass(PureButton, {
        render: {
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var href = _props.href;
                var active = _props.active;
                var disabled = _props.disabled;
                var primary = _props.primary;
                var size = _props.size;

                var props = _objectWithoutProperties(_props, ["className", "href", "active", "disabled", "primary", "size"]);

                var cls = classNames("pure-button", className, active && "pure-button-active", disabled && "pure-button-disabled", primary && "pure-button-primary", size && "pure-button-" + size);

                return href ? React.createElement("a", _extends({ href: href, className: cls }, props)) : React.createElement("button", _extends({ className: cls, disabled: disabled }, props));
            }
        }
    });

    return PureButton;
})(React.Component);

module.exports = PureButton;

PureButton.propTypes = {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    size: React.PropTypes.oneOf(["xsmall", "small", "large", "xlarge"])
};

PureButton.defaultProps = {
    active: false,
    disabled: false,
    primary: false
};