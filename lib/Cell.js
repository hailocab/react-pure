"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var normalizeSize = function () {
    var s = arguments[0] === undefined ? "" : arguments[0];
    return s.toString().replace("/", "-");
};

var PureCell = (function (_React$Component) {
    function PureCell() {
        _classCallCheck(this, PureCell);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureCell, _React$Component);

    _createClass(PureCell, {
        render: {
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var size = _props.size;
                var sm = _props.sm;
                var md = _props.md;
                var lg = _props.lg;
                var xl = _props.xl;

                var props = _objectWithoutProperties(_props, ["className", "size", "sm", "md", "lg", "xl"]);

                var cls = classNames("pure-u-" + normalizeSize(size), sm && "pure-u-sm-" + normalizeSize(sm), md && "pure-u-md-" + normalizeSize(md), lg && "pure-u-lg-" + normalizeSize(lg), xl && "pure-u-xl-" + normalizeSize(xl), className);

                return React.createElement("div", _extends({ className: cls }, props));
            }
        }
    });

    return PureCell;
})(React.Component);

module.exports = PureCell;

PureCell.propTypes = {
    size: React.PropTypes.string,
    sm: React.PropTypes.string,
    md: React.PropTypes.string,
    lg: React.PropTypes.string,
    xl: React.PropTypes.string
};

PureCell.defaultProps = {
    size: "1"
};