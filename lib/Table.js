"use strict";

var _extends = require("babel-runtime/helpers/extends")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _objectWithoutProperties = require("babel-runtime/helpers/object-without-properties")["default"];

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var PureTable = (function (_React$Component) {
    function PureTable() {
        _classCallCheck(this, PureTable);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(PureTable, _React$Component);

    _createClass(PureTable, {
        render: {
            value: function render() {
                var _props = this.props;
                var className = _props.className;
                var bordered = _props.bordered;
                var horizontal = _props.horizontal;
                var striped = _props.striped;

                var props = _objectWithoutProperties(_props, ["className", "bordered", "horizontal", "striped"]);

                var cls = classNames("pure-table", className, bordered && "pure-table-bordered", horizontal && "pure-table-horizontal", striped && "pure-table-striped");

                return React.createElement("table", _extends({ className: cls }, props));
            }
        }
    });

    return PureTable;
})(React.Component);

module.exports = PureTable;

PureTable.propTypes = {
    bordered: React.PropTypes.bool,
    horizontal: React.PropTypes.bool,
    striped: React.PropTypes.bool
};

PureTable.defaultProps = {
    bordered: false,
    horizontal: false,
    striped: false
};