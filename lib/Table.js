"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var joinClasses = _interopRequire(require("./utils/joinClasses"));

module.exports = React.createClass({
    displayName: "PureTable",

    propTypes: {
        bordered: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        striped: React.PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
        return {
            bordered: false,
            horizontal: false,
            striped: false
        };
    },

    render: function render() {
        var _props = this.props;
        var className = _props.className;
        var bordered = _props.bordered;
        var horizontal = _props.horizontal;
        var striped = _props.striped;
        var props = _objectWithoutProperties(_props, ["className", "bordered", "horizontal", "striped"]);

        var cls = joinClasses("pure-table", className, bordered && "pure-table-bordered", horizontal && "pure-table-horizontal", striped && "pure-table-striped");

        return React.createElement("table", _extends({ className: cls }, props));
    }
});