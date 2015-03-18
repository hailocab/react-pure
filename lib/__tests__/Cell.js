"use strict";

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

jest.dontMock("../Cell");

var React = _interopRequire(require("react/addons"));

var Cell = _interopRequire(require("../Cell"));

var TestUtils = React.addons.TestUtils;

describe("Cell", function () {
    it("renders a div with class `pure-u-1` by default", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Cell, { className: "my-cell" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-u-1 my-cell");
    });

    it("applies the class based on the `size` property", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-u-1-2");
    });

    it("adds the `pure-u-sm-*` class based on the `sm` property", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", sm: "1" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-u-1-2 pure-u-sm-1");
    });

    it("adds the `pure-u-md-*` class based on the `md` property", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", md: "1" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-u-1-2 pure-u-md-1");
    });

    it("adds the `pure-u-lg-*` class based on the `lg` property", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", lg: "1/3" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-u-1-2 pure-u-lg-1-3");
    });

    it("adds the `pure-u-xl-*` class based on the `xl` property", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Cell, { size: "1/2", lg: "2/3", xl: "1/4" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-u-1-2 pure-u-lg-2-3 pure-u-xl-1-4");
    });
});