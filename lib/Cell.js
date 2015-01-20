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
  displayName: "PureCell",

  propTypes: {
    size: React.PropTypes.string,
    sm: React.PropTypes.string,
    md: React.PropTypes.string,
    lg: React.PropTypes.string,
    xl: React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      size: "1"
    };
  },

  render: function render() {
    var className = this.props.className;
    var size = this.props.size;
    var sm = this.props.sm;
    var md = this.props.md;
    var lg = this.props.lg;
    var xl = this.props.xl;
    var props = _objectWithoutProperties(this.props, ["className", "size", "sm", "md", "lg", "xl"]);

    var cls = joinClasses(["pure-u-" + size.replace("/", "-"), sm && "pure-u-sm-" + sm.replace("/", "-"), md && "pure-u-md-" + md.replace("/", "-"), lg && "pure-u-lg-" + lg.replace("/", "-"), xl && "pure-u-xl-" + xl.replace("/", "-"), className]);

    return React.createElement("div", React.__spread({ className: cls }, props));
  }
});