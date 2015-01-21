"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

jest.dontMock("../Menu");
jest.dontMock("../utils/joinClasses");

describe("Menu", function () {
  var React = _interopRequire(require("react/addons"));

  var Menu = _interopRequire(require("../Menu"));

  var TestUtils = React.addons.TestUtils;


  it("renders a div with class `pure-menu` by default", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Menu, { className: "my-menu" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-menu my-menu");
  });

  it("adds the `pure-menu-horizontal` class if the `horizontal` property is set to true", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Menu, { horizontal: true }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-menu pure-menu-horizontal");
  });

  it("adds the `pure-menu-open` class if the `open` property is set to true", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Menu, { open: true }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-menu pure-menu-open");
  });
});