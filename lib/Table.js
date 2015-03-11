"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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