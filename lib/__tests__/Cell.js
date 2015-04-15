'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var TestUtils = _React2['default'].addons.TestUtils;

jest.dontMock('../Cell');
var Cell = require('../Cell');

describe('Cell', function () {
    it('renders a div with class `pure-u-1` by default', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Cell, { className: 'my-cell' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-u-1 my-cell');
    });

    it('applies the class based on the `size` property', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Cell, { size: '1/2' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2');
    });

    it('adds the `pure-u-sm-*` class based on the `sm` property', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Cell, { size: '1/2', sm: '1' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-sm-1');
    });

    it('adds the `pure-u-md-*` class based on the `md` property', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Cell, { size: '1/2', md: '1' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-md-1');
    });

    it('adds the `pure-u-lg-*` class based on the `lg` property', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Cell, { size: '1/2', lg: '1/3' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-lg-1-3');
    });

    it('adds the `pure-u-xl-*` class based on the `xl` property', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Cell, { size: '1/2', lg: '2/3', xl: '1/4' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-lg-2-3 pure-u-xl-1-4');
    });
});