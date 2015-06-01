'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

jest.dontMock('../MenuItem');
var MenuItem = require('../MenuItem');

describe('MenuItem', function () {
    it('renders a li with class `pure-menu-item` by default', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(MenuItem, { className: 'my-item' }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu-item my-item');
    });

    it('adds the `pure-menu-selected` class if the `selected` property is set', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(MenuItem, { selected: true }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-selected');
    });

    it('adds the `pure-menu-disabled` class if the `disabled` property is set', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(MenuItem, { disabled: true }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-disabled');
    });

    it('adds the `pure-menu-has-children` class if the `hasChildren` property is set', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(MenuItem, { hasChildren: true }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-has-children');
    });

    it('adds the `pure-menu-allow-hover` class if the `allowHover` property is set', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(MenuItem, { allowHover: true }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-allow-hover');
    });
});