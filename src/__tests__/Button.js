jest.dontMock('../Button');

import React from 'react/addons';
import Button from '../Button';
let {TestUtils} = React.addons;

describe('Button', () => {
    it('renders a button by default', () => {
        let component = TestUtils.renderIntoDocument(<Button />);
        expect(React.findDOMNode(component)).toBeDefined();
    });

    it('renders an anchor the `href` property is set', function() {
        let component = TestUtils.renderIntoDocument(<Button href='#' />);
        let node = React.findDOMNode(component);
        expect(node.tagName).toBe('A');
    });

    it('transfers the `href` property to the anchor', function() {
        let component = TestUtils.renderIntoDocument(<Button href='#test' />);
        let node = React.findDOMNode(component);
        expect(node.href).toMatch(/#test$/);
    });

    it('adds the `pure-button` class', function() {
        let component = TestUtils.renderIntoDocument(<Button className='my-button' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button my-button');
    });

    it('adds the `pure-button-active` class if the `active` property if set', function() {
        let component = TestUtils.renderIntoDocument(<Button active />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-active');
    });

    it('adds the `pure-button-disabled` class if the `disabled` property if set', function() {
        let component = TestUtils.renderIntoDocument(<Button disabled />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-disabled');
    });

    it('transfers the `disabled` property to the button', function() {
        let component = TestUtils.renderIntoDocument(<Button disabled />);
        let node = React.findDOMNode(component);
        expect(node.disabled).toBe(true);
    });

    it('adds the `pure-button-primary` class if the `primary` property if set', function() {
        let component = TestUtils.renderIntoDocument(<Button primary />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-primary');
    });

    it('adds the `pure-button-xsmall` class if the `size` property if set to `xsmall`', function() {
        let component = TestUtils.renderIntoDocument(<Button size='xsmall' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-xsmall');
    });

    it('adds the `pure-button-small` class if the `size` property if set to `small`', function() {
        let component = TestUtils.renderIntoDocument(<Button size='small' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-small');
    });

    it('adds the `pure-button-large` class if the `size` property if set to `large`', function() {
        let component = TestUtils.renderIntoDocument(<Button size='large' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-large');
    });

    it('adds the `pure-button-xlarge` class if the `size` property if set to `xlarge`', function() {
        let component = TestUtils.renderIntoDocument(<Button size='xlarge' />);
        let node = React.findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-xlarge');
    });
});
