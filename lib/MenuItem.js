'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PureMenuItem = (function (_Component) {
    function PureMenuItem() {
        _classCallCheck(this, PureMenuItem);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(PureMenuItem, _Component);

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

            var cls = (0, _classnames2['default'])('pure-menu-item', className, allowHover && 'pure-menu-allow-hover', disabled && 'pure-menu-disabled', hasChildren && 'pure-menu-has-children', selected && 'pure-menu-selected');

            return _react2['default'].createElement('li', _extends({ className: cls }, props));
        }
    }], [{
        key: 'propTypes',
        value: {
            allowHover: _react2['default'].PropTypes.bool,
            disabled: _react2['default'].PropTypes.bool,
            hasChildren: _react2['default'].PropTypes.bool,
            selected: _react2['default'].PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            allowHover: false,
            disabled: false,
            hasChildren: false,
            selected: false
        },
        enumerable: true
    }]);

    return PureMenuItem;
})(_react.Component);

exports['default'] = PureMenuItem;
module.exports = exports['default'];