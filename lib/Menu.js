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
  displayName: "PureMenu",

  propTypes: {
    horizontal: React.PropTypes.bool,
    open: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      horizontal: false,
      open: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      open: this.props.open
    };
  },

  handleEnter: function handleEnter() {
    this.setState({ open: true });
  },

  handleLeave: function handleLeave() {
    this.setState({ open: false });
  },

  render: function render() {
    var className = this.props.className;
    var horizontal = this.props.horizontal;
    var open = this.props.open;
    var props = _objectWithoutProperties(this.props, ["className", "horizontal", "open"]);

    var cls = joinClasses("pure-menu", className, horizontal && "pure-menu-horizontal", this.state.open && "pure-menu-open");

    if (!open) {
      props.onMouseEnter = this.handleEnter;
      props.onMouseLeave = this.handleLeave;
    }

    return React.createElement("div", React.__spread({ className: cls }, props));
  }
});