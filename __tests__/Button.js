import React from 'react';
import { renderIntoDocument } from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

jest.dontMock('../src/Button');
import Button from '../src/Button';

describe('Button', () => {
    it('renders a button by default', () => {
        const component = renderIntoDocument(<Button />);
        expect(findDOMNode(component)).toBeDefined();
    });

    it('renders an anchor the `href` property is set', () => {
        const component = renderIntoDocument(<Button href='#' />);
        const node = findDOMNode(component);
        expect(node.tagName).toBe('A');
    });

    it('transfers the `href` property to the anchor', () => {
        const component = renderIntoDocument(<Button href='#test' />);
        const node = findDOMNode(component);
        expect(node.href).toMatch(/#test$/);
    });

    it('adds the `pure-button` class', () => {
        const component = renderIntoDocument(<Button className='my-button' />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-button my-button');
    });

    it('adds the `pure-button-active` class if the `active` property if set', () => {
        const component = renderIntoDocument(<Button active />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-active');
    });

    it('adds the `pure-button-disabled` class if the `disabled` property if set', () => {
        const component = renderIntoDocument(<Button disabled />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-disabled');
    });

    it('transfers the `disabled` property to the button', () => {
        const component = renderIntoDocument(<Button disabled />);
        const node = findDOMNode(component);
        expect(node.disabled).toBe(true);
    });

    it('adds the `pure-button-primary` class if the `primary` property if set', () => {
        const component = renderIntoDocument(<Button primary />);
        const node = findDOMNode(component);
        expect(node.className).toBe('pure-button pure-button-primary');
    });
});
