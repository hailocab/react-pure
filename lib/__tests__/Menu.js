'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

jest.dontMock('../Menu');
var Menu = require('../Menu');

describe('Menu', function () {
    it('renders a div with class `pure-menu` by default', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(Menu, { className: 'my-menu' }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(Menu, { horizontal: true }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', function () {
        var component = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement(Menu, { scrollable: true }));
        var node = _reactAddons2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-scrollable');
    });
});