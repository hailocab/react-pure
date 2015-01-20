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
  displayName: "PureButton",

  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    size: React.PropTypes.oneOf(["xsmall", "small", "large", "xlarge"])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      disabled: false,
      primary: false
    };
  },

  render: function render() {
    var className = this.props.className;
    var href = this.props.href;
    var active = this.props.active;
    var disabled = this.props.disabled;
    var primary = this.props.primary;
    var size = this.props.size;
    var props = _objectWithoutProperties(this.props, ["className", "href", "active", "disabled", "primary", "size"]);

    var cls = joinClasses("pure-button", className, active && "pure-button-active", disabled && "pure-button-disabled", primary && "pure-button-primary", size && "pure-button-" + size);

    return href ? React.createElement("a", React.__spread({ href: href, className: cls }, props)) : React.createElement("button", React.__spread({ className: cls, disabled: disabled }, props));
  }
});