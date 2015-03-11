"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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