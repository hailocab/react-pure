"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../Button");

var React = _interopRequire(require("react/addons"));

var Button = _interopRequire(require("../Button"));

var TestUtils = React.addons.TestUtils;

describe("Button", function () {
    it("renders a button by default", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, null));
        expect(React.findDOMNode(component)).toBeDefined();
    });

    it("renders an anchor the `href` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { href: "#" }));
        var node = React.findDOMNode(component);
        expect(node.tagName).toBe("A");
    });

    it("transfers the `href` property to the anchor", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { href: "#test" }));
        var node = React.findDOMNode(component);
        expect(node.href).toMatch(/#test$/);
    });

    it("adds the `pure-button` class", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { className: "my-button" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button my-button");
    });

    it("adds the `pure-button-active` class if the `active` property if set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { active: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-active");
    });

    it("adds the `pure-button-disabled` class if the `disabled` property if set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { disabled: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-disabled");
    });

    it("transfers the `disabled` property to the button", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { disabled: true }));
        var node = React.findDOMNode(component);
        expect(node.disabled).toBe(true);
    });

    it("adds the `pure-button-primary` class if the `primary` property if set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { primary: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-primary");
    });

    it("adds the `pure-button-xsmall` class if the `size` property if set to `xsmall`", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { size: "xsmall" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-xsmall");
    });

    it("adds the `pure-button-small` class if the `size` property if set to `small`", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { size: "small" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-small");
    });

    it("adds the `pure-button-large` class if the `size` property if set to `large`", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { size: "large" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-large");
    });

    it("adds the `pure-button-xlarge` class if the `size` property if set to `xlarge`", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(Button, { size: "xlarge" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-button pure-button-xlarge");
    });
});