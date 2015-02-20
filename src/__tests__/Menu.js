jest.dontMock('../Menu');
jest.dontMock('../utils/joinClasses');

import React from 'react/addons';
import Menu from '../Menu';
let {TestUtils} = React.addons;

describe('Menu', () => {
    it('renders a div with class `pure-menu` by default', () => {
        let doc = TestUtils.renderIntoDocument(<Menu className='my-menu' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'div');
        expect(el.getDOMNode().className).toBe('pure-menu my-menu');
    });

    it('adds the `pure-menu-horizontal` class if the `horizontal` property is set to true', () => {
        let doc = TestUtils.renderIntoDocument(<Menu horizontal={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'div');
        expect(el.getDOMNode().className).toBe('pure-menu pure-menu-horizontal');
    });

    it('adds the `pure-menu-open` class if the `open` property is set to true', () => {
        let doc = TestUtils.renderIntoDocument(<Menu open={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'div');
        expect(el.getDOMNode().className).toBe('pure-menu pure-menu-open');
    });

    it('toggles the menu on click if the trigger is set to `click`', () => {
        let doc = TestUtils.renderIntoDocument(<Menu trigger='click' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'div');
        let node = el.getDOMNode();

        TestUtils.Simulate.click(el);
        expect(el.getDOMNode().className).toBe('pure-menu pure-menu-open');

        TestUtils.Simulate.click(el);
        expect(el.getDOMNode().className).toBe('pure-menu');
    });
});
