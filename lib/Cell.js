"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

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