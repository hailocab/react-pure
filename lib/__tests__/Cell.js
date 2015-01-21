"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

jest.dontMock("../Cell");
jest.dontMock("../utils/joinClasses");

describe("Cell", function () {
  var React = _interopRequire(require("react/addons"));

  var Cell = _interopRequire(require("../Cell"));

  var TestUtils = React.addons.TestUtils;


  it("renders a div with class `pure-u-1` by default", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Cell, { className: "my-cell" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-u-1 my-cell");
  });

  it("applies the class based on the `size` property", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-u-1-2");
  });

  it("adds the `pure-u-sm-*` class based on the `sm` property", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", sm: "1" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-u-1-2 pure-u-sm-1");
  });

  it("adds the `pure-u-md-*` class based on the `md` property", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", md: "1" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-u-1-2 pure-u-md-1");
  });

  it("adds the `pure-u-lg-*` class based on the `lg` property", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", lg: "1/3" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-u-1-2 pure-u-lg-1-3");
  });

  it("adds the `pure-u-xl-*` class based on the `xl` property", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", lg: "2/3", xl: "1/4" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "div");
    expect(el.getDOMNode().className).toBe("pure-u-1-2 pure-u-lg-2-3 pure-u-xl-1-4");
  });
});