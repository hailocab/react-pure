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

var normalizeSize = function normalizeSize() {
    var s = arguments[0] === undefined ? '' : arguments[0];
    return s.toString().replace('/', '-');
};

var PureCell = (function (_Component) {
    function PureCell() {
        _classCallCheck(this, PureCell);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(PureCell, _Component);

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

            var cls = (0, _classnames2['default'])('pure-u-' + normalizeSize(size), sm && 'pure-u-sm-' + normalizeSize(sm), md && 'pure-u-md-' + normalizeSize(md), lg && 'pure-u-lg-' + normalizeSize(lg), xl && 'pure-u-xl-' + normalizeSize(xl), className);

            return _react2['default'].createElement('div', _extends({ className: cls }, props));
        }
    }], [{
        key: 'propTypes',
        value: {
            size: _react.PropTypes.string,
            sm: _react.PropTypes.string,
            md: _react.PropTypes.string,
            lg: _react.PropTypes.string,
            xl: _react.PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            size: '1'
        },
        enumerable: true
    }]);

    return PureCell;
})(_react.Component);

exports['default'] = PureCell;
module.exports = exports['default'];