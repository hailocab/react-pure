"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var PureMenuItem = (function (_React$Component) {
    function PureMenuItem() {
        _classCallCheck(this, PureMenuItem);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureMenuItem, _React$Component);

    _createClass(PureMenuItem, {
        render: {
            value: function render() {
                var _props = this.props;
                var allowHover = _props.allowHover;
                var className = _props.className;
                var disabled = _props.disabled;
                var hasChildren = _props.hasChildren;
                var selected = _props.selected;

                var props = _objectWithoutProperties(_props, ["allowHover", "className", "disabled", "hasChildren", "selected"]);

                var cls = classNames("pure-menu-item", className, allowHover && "pure-menu-allow-hover", disabled && "pure-menu-disabled", hasChildren && "pure-menu-has-children", selected && "pure-menu-selected");

                return React.createElement("li", _extends({ className: cls }, props));
            }
        }
    });

    return PureMenuItem;
})(React.Component);

module.exports = PureMenuItem;

PureMenuItem.propType = {
    allowHover: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    hasChildren: React.PropTypes.bool,
    selected: React.PropTypes.bool
};

PureMenuItem.defaultProps = {
    allowHover: false,
    disabled: false,
    hasChildren: false,
    selected: false
};