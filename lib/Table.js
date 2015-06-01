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

var PureTable = (function (_Component) {
    function PureTable() {
        _classCallCheck(this, PureTable);

        if (_Component != null) {
            _Component.apply(this, arguments);
        }
    }

    _inherits(PureTable, _Component);

    _createClass(PureTable, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var bordered = _props.bordered;
            var horizontal = _props.horizontal;
            var striped = _props.striped;

            var props = _objectWithoutProperties(_props, ['className', 'bordered', 'horizontal', 'striped']);

            var cls = (0, _classnames2['default'])('pure-table', className, bordered && 'pure-table-bordered', horizontal && 'pure-table-horizontal', striped && 'pure-table-striped');

            return _react2['default'].createElement('table', _extends({ className: cls }, props));
        }
    }], [{
        key: 'propTypes',
        value: {
            bordered: _react.PropTypes.bool,
            horizontal: _react.PropTypes.bool,
            striped: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            bordered: false,
            horizontal: false,
            striped: false
        },
        enumerable: true
    }]);

    return PureTable;
})(_react.Component);

exports['default'] = PureTable;
module.exports = exports['default'];