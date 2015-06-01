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

var PureMenu = (function (_Component) {
    function PureMenu() {
        _classCallCheck(this, PureMenu);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(PureMenu, _Component);

    _createClass(PureMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var horizontal = _props.horizontal;
            var scrollable = _props.scrollable;

            var props = _objectWithoutProperties(_props, ['className', 'horizontal', 'scrollable']);

            var cls = (0, _classnames2['default'])('pure-menu', className, horizontal && 'pure-menu-horizontal', scrollable && 'pure-menu-scrollable');

            return _react2['default'].createElement('div', _extends({ className: cls }, props));
        }
    }], [{
        key: 'propTypes',
        value: {
            horizontal: _react.PropTypes.bool,
            scrollable: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            horizontal: false,
            scrollable: false
        },
        enumerable: true
    }]);

    return PureMenu;
})(_react.Component);

exports['default'] = PureMenu;
module.exports = exports['default'];