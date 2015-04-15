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

var PureTable = (function (_React$Component) {
    function PureTable() {
        _classCallCheck(this, PureTable);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureTable, _React$Component);

    _createClass(PureTable, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var bordered = _props.bordered;
            var horizontal = _props.horizontal;
            var striped = _props.striped;

            var props = _objectWithoutProperties(_props, ['className', 'bordered', 'horizontal', 'striped']);

            var cls = _classNames2['default']('pure-table', className, bordered && 'pure-table-bordered', horizontal && 'pure-table-horizontal', striped && 'pure-table-striped');

            return _React2['default'].createElement('table', _extends({ className: cls }, props));
        }
    }]);

    return PureTable;
})(_React2['default'].Component);

exports['default'] = PureTable;
;

PureTable.propTypes = {
    bordered: _React2['default'].PropTypes.bool,
    horizontal: _React2['default'].PropTypes.bool,
    striped: _React2['default'].PropTypes.bool
};

PureTable.defaultProps = {
    bordered: false,
    horizontal: false,
    striped: false
};
module.exports = exports['default'];