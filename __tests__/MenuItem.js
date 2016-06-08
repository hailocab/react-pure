import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

jest.dontMock('../src/MenuItem');
import MenuItem from '../src/MenuItem';

describe('MenuItem', () => {
    it('renders a li with class `pure-menu-item` by default', () => {
        const component = renderIntoDocument(<MenuItem className='my-item' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu-item my-item');
    });

    it('adds the `pure-menu-selected` class if the `selected` property is set', () => {
        const component = renderIntoDocument(<MenuItem selected />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-selected');
    });

    it('adds the `pure-menu-disabled` class if the `disabled` property is set', () => {
        const component = renderIntoDocument(<MenuItem disabled />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-disabled');
    });

    it('adds the `pure-menu-has-children` class if the `hasChildren` property is set', () => {
        const component = renderIntoDocument(<MenuItem hasChildren />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-has-children');
    });

    it('adds the `pure-menu-allow-hover` class if the `allowHover` property is set', () => {
        const component = renderIntoDocument(<MenuItem allowHover />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-menu-item pure-menu-allow-hover');
    });
});
