import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

jest.dontMock('../src/Table');
import Table from '../src/Table';

describe('Table', () => {
    it('renders a table with class `pure-table` by default', () => {
        const component = renderIntoDocument(<Table className='my-table' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-table my-table');
    });

    it('adds the `pure-table-bordered` class if the `bordered` property is set', () => {
        const component = renderIntoDocument(<Table bordered />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-bordered');
    });

    it('adds the `pure-table-horizontal` class if the `horizontal` property is set', () => {
        const component = renderIntoDocument(<Table horizontal />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-horizontal');
    });

    it('adds the `pure-table-striped` class if the `striped` property is set to true', () => {
        const component = renderIntoDocument(<Table striped />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-striped');
    });
});
