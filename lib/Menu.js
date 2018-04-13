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

var PureMenu = function (_Component) {
    (0, _inherits3.default)(PureMenu, _Component);

    function PureMenu() {
        (0, _classCallCheck3.default)(this, PureMenu);
        return (0, _possibleConstructorReturn3.default)(this, (PureMenu.__proto__ || Object.getPrototypeOf(PureMenu)).apply(this, arguments));
    }

    (0, _createClass3.default)(PureMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                horizontal = _props.horizontal,
                scrollable = _props.scrollable,
                props = (0, _objectWithoutProperties3.default)(_props, ['className', 'horizontal', 'scrollable']);

            var cls = (0, _classnames2.default)('pure-menu', className, horizontal && 'pure-menu-horizontal', scrollable && 'pure-menu-scrollable');

            return _react2.default.createElement('div', (0, _extends3.default)({ className: cls }, props));
        }
    }]);
    return PureMenu;
}(_react.Component);

PureMenu.propTypes = {
    horizontal: _propTypes2.default.bool,
    scrollable: _propTypes2.default.bool
};
PureMenu.defaultProps = {
    horizontal: false,
    scrollable: false
};
exports.default = PureMenu;