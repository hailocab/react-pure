'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var TestUtils = _React2['default'].addons.TestUtils;

jest.dontMock('../Menu');
var Menu = require('../Menu');

describe('Menu', function () {
    it('renders a div with class `pure-menu` by default', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Menu, { className: 'my-menu' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Menu, { horizontal: true }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Menu, { scrollable: true }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-scrollable');
    });
});