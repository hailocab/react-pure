import React from 'react/addons';
const { TestUtils } = React.addons;

jest.dontMock('../Button');
const Button = require('../Button');

describe('Button', () => {
    it('renders a button by default', () => {
        const component = TestUtils.renderIntoDocument(<Button />);
        expect(React.findDOMNode(component)).toBeDefined();
    });

    it('renders an anchor the `href` property is set', () => {
        const component = TestUtils.renderIntoDocument(<Button href='#' />);
        const node = React.findDOMNode(component);
        expect(node.tagName).toBe('A');
    });

    it('transfers the `href` property to the anchor', () => {
        const component = TestUtils.renderIntoDocument(<Button href='#test' />);
        const node = React.findDOMNode(component);
        expect(node.href).toMatch(/#test$/);
    });

    it('adds the `pure-button` class', () => {
        const component = TestUtils.renderIntoDocument(<Button className='my-button' />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button my-button');
    });

    it('adds the `pure-button-active` class if the `active` property if set', () => {
        const component = TestUtils.renderIntoDocument(<Button active />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-active');
    });

    it('adds the `pure-button-disabled` class if the `disabled` property if set', () => {
        const component = TestUtils.renderIntoDocument(<Button disabled />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-disabled');
    });

    it('transfers the `disabled` property to the button', () => {
        const component = TestUtils.renderIntoDocument(<Button disabled />);
        const node = React.findDOMNode(component);
        expect(node.disabled).toBe(true);
    });

    it('adds the `pure-button-primary` class if the `primary` property if set', () => {
        const component = TestUtils.renderIntoDocument(<Button primary />);
        const node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-primary');
    });
});
