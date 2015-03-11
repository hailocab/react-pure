"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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