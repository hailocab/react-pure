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

var PureMenuItem = function (_Component) {
    (0, _inherits3.default)(PureMenuItem, _Component);

    function PureMenuItem() {
        (0, _classCallCheck3.default)(this, PureMenuItem);
        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(PureMenuItem).apply(this, arguments));
    }

    (0, _createClass3.default)(PureMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var allowHover = _props.allowHover;
            var className = _props.className;
            var disabled = _props.disabled;
            var hasChildren = _props.hasChildren;
            var selected = _props.selected;
            var props = (0, _objectWithoutProperties3.default)(_props, ['allowHover', 'className', 'disabled', 'hasChildren', 'selected']);

            var cls = (0, _classnames2.default)('pure-menu-item', className, allowHover && 'pure-menu-allow-hover', disabled && 'pure-menu-disabled', hasChildren && 'pure-menu-has-children', selected && 'pure-menu-selected');

            return _react2.default.createElement('li', (0, _extends3.default)({ className: cls }, props));
        }
    }]);
    return PureMenuItem;
}(_react.Component);

PureMenuItem.propTypes = {
    allowHover: _react2.default.PropTypes.bool,
    disabled: _react2.default.PropTypes.bool,
    hasChildren: _react2.default.PropTypes.bool,
    selected: _react2.default.PropTypes.bool
};
PureMenuItem.defaultProps = {
    allowHover: false,
    disabled: false,
    hasChildren: false,
    selected: false
};
exports.default = PureMenuItem;