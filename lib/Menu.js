"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var PureMenu = (function (_React$Component) {
    function PureMenu() {
        _classCallCheck(this, PureMenu);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureMenu, _React$Component);

    _createClass(PureMenu, {
        render: {
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var horizontal = _props.horizontal;
                var scrollable = _props.scrollable;

                var props = _objectWithoutProperties(_props, ["className", "horizontal", "scrollable"]);

                var cls = classNames("pure-menu", className, horizontal && "pure-menu-horizontal", scrollable && "pure-menu-scrollable");

                return React.createElement("div", _extends({ className: cls }, props));
            }
        }
    });

    return PureMenu;
})(React.Component);

module.exports = PureMenu;

PureMenu.propTypes = {
    horizontal: React.PropTypes.bool,
    scrollable: React.PropTypes.bool
};

PureMenu.defaultProps = {
    horizontal: false,
    scrollable: false
};