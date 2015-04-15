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

var normalizeSize = function normalizeSize() {
    var s = arguments[0] === undefined ? '' : arguments[0];
    return s.toString().replace('/', '-');
};

var PureCell = (function (_React$Component) {
    function PureCell() {
        _classCallCheck(this, PureCell);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureCell, _React$Component);

    _createClass(PureCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var size = _props.size;
            var sm = _props.sm;
            var md = _props.md;
            var lg = _props.lg;
            var xl = _props.xl;

            var props = _objectWithoutProperties(_props, ['className', 'size', 'sm', 'md', 'lg', 'xl']);

            var cls = _classNames2['default']('pure-u-' + normalizeSize(size), sm && 'pure-u-sm-' + normalizeSize(sm), md && 'pure-u-md-' + normalizeSize(md), lg && 'pure-u-lg-' + normalizeSize(lg), xl && 'pure-u-xl-' + normalizeSize(xl), className);

            return _React2['default'].createElement('div', _extends({ className: cls }, props));
        }
    }]);

    return PureCell;
})(_React2['default'].Component);

exports['default'] = PureCell;

PureCell.propTypes = {
    size: _React2['default'].PropTypes.string,
    sm: _React2['default'].PropTypes.string,
    md: _React2['default'].PropTypes.string,
    lg: _React2['default'].PropTypes.string,
    xl: _React2['default'].PropTypes.string
};

PureCell.defaultProps = {
    size: '1'
};
module.exports = exports['default'];