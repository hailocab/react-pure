"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

    _prototypeProperties(PureButton, null, {
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
            },
            writable: true,
            configurable: true
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