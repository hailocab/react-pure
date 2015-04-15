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

var PureMenu = (function (_React$Component) {
    function PureMenu() {
        _classCallCheck(this, PureMenu);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureMenu, _React$Component);

    _createClass(PureMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var horizontal = _props.horizontal;
            var scrollable = _props.scrollable;

            var props = _objectWithoutProperties(_props, ['className', 'horizontal', 'scrollable']);

            var cls = _classNames2['default']('pure-menu', className, horizontal && 'pure-menu-horizontal', scrollable && 'pure-menu-scrollable');

            return _React2['default'].createElement('div', _extends({ className: cls }, props));
        }
    }]);

    return PureMenu;
})(_React2['default'].Component);

exports['default'] = PureMenu;

PureMenu.propTypes = {
    horizontal: _React2['default'].PropTypes.bool,
    scrollable: _React2['default'].PropTypes.bool
};

PureMenu.defaultProps = {
    horizontal: false,
    scrollable: false
};
module.exports = exports['default'];