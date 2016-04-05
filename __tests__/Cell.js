import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

jest.dontMock('../src/Cell');
import Cell from '../src/Cell';

describe('Cell', () => {
    it('renders a div with class `pure-u-1` by default', () => {
        const component = renderIntoDocument(<Cell className='my-cell' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-u-1 my-cell');
    });

    it('applies the class based on the `size` property', () => {
        const component = renderIntoDocument(<Cell size='1/2' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2');
    });

    it('adds the `pure-u-sm-*` class based on the `sm` property', () => {
        const component = renderIntoDocument(<Cell size='1/2' sm='1' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-sm-1');
    });

    it('adds the `pure-u-md-*` class based on the `md` property', () => {
        const component = renderIntoDocument(<Cell size='1/2' md='1' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-md-1');
    });

    it('adds the `pure-u-lg-*` class based on the `lg` property', () => {
        const component = renderIntoDocument(<Cell size='1/2' lg='1/3' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-lg-1-3');
    });

    it('adds the `pure-u-xl-*` class based on the `xl` property', () => {
        const component = renderIntoDocument(<Cell size='1/2' lg='2/3' xl='1/4' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-lg-2-3 pure-u-xl-1-4');
    });
});
