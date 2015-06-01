import React from 'react/addons';
const { TestUtils } = React.addons;

jest.dontMock('../Menu');
const Menu = require('../Menu');

describe('Menu', () => {
    it('renders a div with class `pure-menu` by default', () => {
        const component = TestUtils.renderIntoDocument(<Menu className='my-menu' />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', () => {
        const component = TestUtils.renderIntoDocument(<Menu horizontal />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', () => {
        const component = TestUtils.renderIntoDocument(<Menu scrollable />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-scrollable');
    });
});
