jest.dontMock('../Menu');

import React from 'react/addons';
import Menu from '../Menu';
let {TestUtils} = React.addons;

describe('Menu', () => {
    it('renders a div with class `pure-menu` by default', () => {
        let component = TestUtils.renderIntoDocument(<Menu className='my-menu' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set', () => {
        let component = TestUtils.renderIntoDocument(<Menu horizontal />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-scrollable` class if the `scrollable` property is set', () => {
        let component = TestUtils.renderIntoDocument(<Menu scrollable />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu pure-menu-scrollable');
    });
});
