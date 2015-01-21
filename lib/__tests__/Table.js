"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

jest.dontMock("../Table");
jest.dontMock("../utils/joinClasses");

describe("Table", function () {
  var React = _interopRequire(require("react/addons"));

  var Table = _interopRequire(require("../Table"));

  var TestUtils = React.addons.TestUtils;


  it("renders a table with class `pure-table` by default", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Table, { className: "my-table" }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "table");
    expect(el.getDOMNode().className).toBe("pure-table my-table");
  });

  it("adds the `pure-table-bordered` class if the `bordered` property is set to true", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Table, { bordered: true }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "table");
    expect(el.getDOMNode().className).toBe("pure-table pure-table-bordered");
  });

  it("adds the `pure-table-horizontal` class if the `horizontal` property is set to true", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Table, { horizontal: true }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "table");
    expect(el.getDOMNode().className).toBe("pure-table pure-table-horizontal");
  });

  it("adds the `pure-table-striped` class if the `striped` property is set to true", function () {
    var doc = TestUtils.renderIntoDocument(React.createElement(Table, { striped: true }));
    var el = TestUtils.findRenderedDOMComponentWithTag(doc, "table");
    expect(el.getDOMNode().className).toBe("pure-table pure-table-striped");
  });
});