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

var PureButton = function (_Component) {
    (0, _inherits3.default)(PureButton, _Component);

    function PureButton() {
        (0, _classCallCheck3.default)(this, PureButton);
        return (0, _possibleConstructorReturn3.default)(this, (PureButton.__proto__ || Object.getPrototypeOf(PureButton)).apply(this, arguments));
    }

    (0, _createClass3.default)(PureButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                href = _props.href,
                active = _props.active,
                disabled = _props.disabled,
                primary = _props.primary,
                props = (0, _objectWithoutProperties3.default)(_props, ['className', 'href', 'active', 'disabled', 'primary']);

            var cls = (0, _classnames2.default)('pure-button', className, active && 'pure-button-active', disabled && 'pure-button-disabled', primary && 'pure-button-primary');

            return href ? _react2.default.createElement('a', (0, _extends3.default)({ href: href, className: cls }, props)) : _react2.default.createElement('button', (0, _extends3.default)({ className: cls, disabled: disabled }, props));
        }
    }]);
    return PureButton;
}(_react.Component);

PureButton.propTypes = {
    active: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    primary: _propTypes2.default.bool
};
PureButton.defaultProps = {
    active: false,
    disabled: false,
    primary: false
};
exports.default = PureButton;