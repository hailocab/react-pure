jest.dontMock('../Cell');

import React from 'react/addons';
import Cell from '../Cell';
let {TestUtils} = React.addons;

describe('Cell', () => {
    it('renders a div with class `pure-u-1` by default', () => {
        let component = TestUtils.renderIntoDocument(<Cell className='my-cell' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-u-1 my-cell');
    });

    it('applies the class based on the `size` property', () => {
        let component = TestUtils.renderIntoDocument(<Cell size='1/2' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2');
    });

    it('adds the `pure-u-sm-*` class based on the `sm` property', () => {
        let component = TestUtils.renderIntoDocument(<Cell size='1/2' sm='1' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-sm-1');
    });

    it('adds the `pure-u-md-*` class based on the `md` property', () => {
        let component = TestUtils.renderIntoDocument(<Cell size='1/2' md='1' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-md-1');
    });

    it('adds the `pure-u-lg-*` class based on the `lg` property', () => {
        let component = TestUtils.renderIntoDocument(<Cell size='1/2' lg='1/3' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-lg-1-3');
    });

    it('adds the `pure-u-xl-*` class based on the `xl` property', () => {
        let component = TestUtils.renderIntoDocument(<Cell size='1/2' lg='2/3' xl='1/4' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-u-1-2 pure-u-lg-2-3 pure-u-xl-1-4');
    });
});
