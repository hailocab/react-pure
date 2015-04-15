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

var PureMenuItem = (function (_React$Component) {
    function PureMenuItem() {
        _classCallCheck(this, PureMenuItem);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureMenuItem, _React$Component);

    _createClass(PureMenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var allowHover = _props.allowHover;
            var className = _props.className;
            var disabled = _props.disabled;
            var hasChildren = _props.hasChildren;
            var selected = _props.selected;

            var props = _objectWithoutProperties(_props, ['allowHover', 'className', 'disabled', 'hasChildren', 'selected']);

            var cls = _classNames2['default']('pure-menu-item', className, allowHover && 'pure-menu-allow-hover', disabled && 'pure-menu-disabled', hasChildren && 'pure-menu-has-children', selected && 'pure-menu-selected');

            return _React2['default'].createElement('li', _extends({ className: cls }, props));
        }
    }]);

    return PureMenuItem;
})(_React2['default'].Component);

exports['default'] = PureMenuItem;

PureMenuItem.propType = {
    allowHover: _React2['default'].PropTypes.bool,
    disabled: _React2['default'].PropTypes.bool,
    hasChildren: _React2['default'].PropTypes.bool,
    selected: _React2['default'].PropTypes.bool
};

PureMenuItem.defaultProps = {
    allowHover: false,
    disabled: false,
    hasChildren: false,
    selected: false
};
module.exports = exports['default'];