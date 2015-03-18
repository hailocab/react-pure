"use strict";

var _interopRequire = require("babel-runtime/helpers/interop-require")["default"];

jest.dontMock("../MenuItem");

var React = _interopRequire(require("react/addons"));

var MenuItem = _interopRequire(require("../MenuItem"));

var TestUtils = React.addons.TestUtils;

describe("MenuItem", function () {
    it("renders a li with class `pure-menu-item` by default", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(MenuItem, { className: "my-item" }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu-item my-item");
    });

    it("adds the `pure-menu-selected` class if the `selected` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(MenuItem, { selected: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu-item pure-menu-selected");
    });

    it("adds the `pure-menu-disabled` class if the `disabled` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(MenuItem, { disabled: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu-item pure-menu-disabled");
    });

    it("adds the `pure-menu-has-children` class if the `hasChildren` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(MenuItem, { hasChildren: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu-item pure-menu-has-children");
    });

    it("adds the `pure-menu-allow-hover` class if the `allowHover` property is set", function () {
        var component = TestUtils.renderIntoDocument(React.createElement(MenuItem, { allowHover: true }));
        var node = React.findDOMNode(component);
        expect(node.className).toBe("pure-menu-item pure-menu-allow-hover");
    });
});