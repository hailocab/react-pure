'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeSize = function normalizeSize() {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return s.toString().replace('/', '-');
};

var PureCell = function (_Component) {
    (0, _inherits3.default)(PureCell, _Component);

    function PureCell() {
        (0, _classCallCheck3.default)(this, PureCell);
        return (0, _possibleConstructorReturn3.default)(this, (PureCell.__proto__ || Object.getPrototypeOf(PureCell)).apply(this, arguments));
    }

    (0, _createClass3.default)(PureCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                size = _props.size,
                sm = _props.sm,
                md = _props.md,
                lg = _props.lg,
                xl = _props.xl,
                props = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'sm', 'md', 'lg', 'xl']);

            var cls = (0, _classnames2.default)('pure-u-' + normalizeSize(size), sm && 'pure-u-sm-' + normalizeSize(sm), md && 'pure-u-md-' + normalizeSize(md), lg && 'pure-u-lg-' + normalizeSize(lg), xl && 'pure-u-xl-' + normalizeSize(xl), className);

            return _react2.default.createElement('div', (0, _extends3.default)({ className: cls }, props));
        }
    }]);
    return PureCell;
}(_react.Component);

PureCell.propTypes = {
    size: _propTypes2.default.string,
    sm: _propTypes2.default.string,
    md: _propTypes2.default.string,
    lg: _propTypes2.default.string,
    xl: _propTypes2.default.string
};
PureCell.defaultProps = {
    size: '1'
};
exports.default = PureCell;