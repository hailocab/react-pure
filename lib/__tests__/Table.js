'use strict';

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var TestUtils = _React2['default'].addons.TestUtils;

jest.dontMock('../Table');
var Table = require('../Table');

describe('Table', function () {
    it('renders a table with class `pure-table` by default', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Table, { className: 'my-table' }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-table my-table');
    });

    it('adds the `pure-table-bordered` class if the `bordered` property is set', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Table, { bordered: true }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-bordered');
    });

    it('adds the `pure-table-horizontal` class if the `horizontal` property is set', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Table, { horizontal: true }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-horizontal');
    });

    it('adds the `pure-table-striped` class if the `striped` property is set to true', function () {
        var component = TestUtils.renderIntoDocument(_React2['default'].createElement(Table, { striped: true }));
        var node = _React2['default'].findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-striped');
    });
});