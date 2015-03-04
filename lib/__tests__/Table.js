"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../Table");

var React = _interopRequire(require("react/addons"));

var Table = _interopRequire(require("../Table"));

var TestUtils = React.addons.TestUtils;

describe("Table", function () {
    it("renders a table with class `pure-table` by default", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Table, { className: "my-table" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-table my-table");
    });

    it("adds the `pure-table-bordered` class if the `bordered` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Table, { bordered: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-table pure-table-bordered");
    });

    it("adds the `pure-table-horizontal` class if the `horizontal` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Table, { horizontal: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-table pure-table-horizontal");
    });

    it("adds the `pure-table-striped` class if the `striped` property is set to true", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Table, { striped: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-table pure-table-striped");
    });
});