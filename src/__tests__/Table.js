jest.dontMock('../Table');

import React from 'react/addons';
import Table from '../Table';
const {TestUtils} = React.addons;

describe('Table', () => {
    it('renders a table with class `pure-table` by default', () => {
        const component = TestUtils.renderIntoDocument(<Table className='my-table' />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-table my-table');
    });

    it('adds the `pure-table-bordered` class if the `bordered` property is set', () => {
        const component = TestUtils.renderIntoDocument(<Table bordered />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-bordered');
    });

    it('adds the `pure-table-horizontal` class if the `horizontal` property is set', () => {
        const component = TestUtils.renderIntoDocument(<Table horizontal />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-horizontal');
    });

    it('adds the `pure-table-striped` class if the `striped` property is set to true', () => {
        const component = TestUtils.renderIntoDocument(<Table striped />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-table pure-table-striped');
    });
});
