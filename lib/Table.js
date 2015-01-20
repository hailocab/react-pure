"use strict";

var _objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

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
    var className = this.props.className;
    var bordered = this.props.bordered;
    var horizontal = this.props.horizontal;
    var striped = this.props.striped;
    var props = _objectWithoutProperties(this.props, ["className", "bordered", "horizontal", "striped"]);

    var cls = joinClasses("pure-table", className, bordered && "pure-table-bordered", horizontal && "pure-table-horizontal", striped && "pure-table-striped");

    return React.createElement("table", React.__spread({ className: cls }, props));
  }
});