'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PureButton = (function (_Component) {
    function PureButton() {
        _classCallCheck(this, PureButton);

        _get(Object.getPrototypeOf(PureButton.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(PureButton, _Component);

    _createClass(PureButton, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var href = _props.href;
            var active = _props.active;
            var disabled = _props.disabled;
            var primary = _props.primary;

            var props = _objectWithoutProperties(_props, ['className', 'href', 'active', 'disabled', 'primary']);

            var cls = (0, _classnames2['default'])('pure-button', className, active && 'pure-button-active', disabled && 'pure-button-disabled', primary && 'pure-button-primary');

            return href ? _react2['default'].createElement('a', _extends({ href: href, className: cls }, props)) : _react2['default'].createElement('button', _extends({ className: cls, disabled: disabled }, props));
        }
    }], [{
        key: 'propTypes',
        value: {
            active: _react.PropTypes.bool,
            disabled: _react.PropTypes.bool,
            primary: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            active: false,
            disabled: false,
            primary: false
        },
        enumerable: true
    }]);

    return PureButton;
})(_react.Component);

exports['default'] = PureButton;
module.exports = exports['default'];