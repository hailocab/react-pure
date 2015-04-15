'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _classNames = require('classnames');

var _classNames2 = _interopRequireWildcard(_classNames);

var PureButton = (function (_React$Component) {
    function PureButton() {
        _classCallCheck(this, PureButton);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureButton, _React$Component);

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

            var cls = _classNames2['default']('pure-button', className, active && 'pure-button-active', disabled && 'pure-button-disabled', primary && 'pure-button-primary');

            return href ? _React2['default'].createElement('a', _extends({ href: href, className: cls }, props)) : _React2['default'].createElement('button', _extends({ className: cls, disabled: disabled }, props));
        }
    }]);

    return PureButton;
})(_React2['default'].Component);

exports['default'] = PureButton;

PureButton.propTypes = {
    active: _React2['default'].PropTypes.bool,
    disabled: _React2['default'].PropTypes.bool,
    primary: _React2['default'].PropTypes.bool
};

PureButton.defaultProps = {
    active: false,
    disabled: false,
    primary: false
};
module.exports = exports['default'];