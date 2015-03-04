"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../Menu");

var React = _interopRequire(require("react/addons"));

var Menu = _interopRequire(require("../Menu"));

var TestUtils = React.addons.TestUtils;

describe("Menu", function () {
    it("renders a div with class `pure-menu` by default", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Menu, { className: "my-menu" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu my-menu");
    });

    it("adds the `pure-menu-horizontal` class if the `horizontal` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Menu, { horizontal: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu pure-menu-horizontal");
    });

    it("adds the `pure-menu-scrollable` class if the `scrollable` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Menu, { scrollable: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu pure-menu-scrollable");
    });
});