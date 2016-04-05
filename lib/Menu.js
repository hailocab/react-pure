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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PureMenu = function (_Component) {
    (0, _inherits3.default)(PureMenu, _Component);

    function PureMenu() {
        (0, _classCallCheck3.default)(this, PureMenu);
        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(PureMenu).apply(this, arguments));
    }

    (0, _createClass3.default)(PureMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var horizontal = _props.horizontal;
            var scrollable = _props.scrollable;
            var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'horizontal', 'scrollable']);

            var cls = (0, _classnames2.default)('pure-menu', className, horizontal && 'pure-menu-horizontal', scrollable && 'pure-menu-scrollable');

            return _react2.default.createElement('div', (0, _extends3.default)({ className: cls }, props));
        }
    }]);
    return PureMenu;
}(_react.Component);

PureMenu.propTypes = {
    horizontal: _react.PropTypes.bool,
    scrollable: _react.PropTypes.bool
};
PureMenu.defaultProps = {
    horizontal: false,
    scrollable: false
};
exports.default = PureMenu;