'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PureTable = function (_Component) {
    (0, _inherits3.default)(PureTable, _Component);

    function PureTable() {
        (0, _classCallCheck3.default)(this, PureTable);
        return (0, _possibleConstructorReturn3.default)(this, Object.getPrototypeOf(PureTable).apply(this, arguments));
    }

    (0, _createClass3.default)(PureTable, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var bordered = _props.bordered;
            var horizontal = _props.horizontal;
            var striped = _props.striped;
            var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'bordered', 'horizontal', 'striped']);

            var cls = (0, _classnames2.default)('pure-table', className, bordered && 'pure-table-bordered', horizontal && 'pure-table-horizontal', striped && 'pure-table-striped');

            return _react2.default.createElement('table', (0, _extends3.default)({ className: cls }, props));
        }
    }]);
    return PureTable;
}(_react.Component);

PureTable.propTypes = {
    bordered: _react.PropTypes.bool,
    horizontal: _react.PropTypes.bool,
    striped: _react.PropTypes.bool
};
PureTable.defaultProps = {
    bordered: false,
    horizontal: false,
    striped: false
};
exports.default = PureTable;