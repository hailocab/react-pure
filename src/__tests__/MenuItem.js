jest.dontMock('../MenuItem');

import React from 'react/addons';
import MenuItem from '../MenuItem';
const {TestUtils} = React.addons;

describe('MenuItem', () => {
    it('renders a li with class `pure-menu-item` by default', () => {
        const component = TestUtils.renderIntoDocument(<MenuItem className='my-item' />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu-item my-item');
    });

    it('adds the `pure-menu-selected` class if the `selected` property is set', () => {
        const component = TestUtils.renderIntoDocument(<MenuItem selected />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-selected');
    });

    it('adds the `pure-menu-disabled` class if the `disabled` property is set', () => {
        const component = TestUtils.renderIntoDocument(<MenuItem disabled />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-disabled');
    });

    it('adds the `pure-menu-has-children` class if the `hasChildren` property is set', () => {
        const component = TestUtils.renderIntoDocument(<MenuItem hasChildren />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-has-children');
    });

    it('adds the `pure-menu-allow-hover` class if the `allowHover` property is set', () => {
        const component = TestUtils.renderIntoDocument(<MenuItem allowHover />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-allow-hover');
    });
});
