jest.dontMock('../Button');
jest.dontMock('../utils/joinClasses');

describe('Button', () => {
    import React from 'react/addons';
    import Button from '../Button';
    let {TestUtils} = React.addons;

    it('renders a button by default', () => {
        let doc = TestUtils.renderIntoDocument(<Button />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el).toBeDefined();
    });

    it('renders an anchor the `href` property is set', function() {
        let doc = TestUtils.renderIntoDocument(<Button href='#' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'a');
        expect(el).toBeDefined();
    });

    it('transfers the `href` property to the anchor', function() {
        let doc = TestUtils.renderIntoDocument(<Button href='#test' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'a');
        expect(el.getDOMNode().href).toMatch(/#test$/);
    });

    it('adds the `pure-button` class', function() {
        let doc = TestUtils.renderIntoDocument(<Button className='my-button' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button my-button');
    });

    it('adds the `pure-button-active` class if the `active` property if set to true', function() {
        let doc = TestUtils.renderIntoDocument(<Button active={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-active');
    });

    it('adds the `pure-button-disabled` class if the `disabled` property if set to true', function() {
        let doc = TestUtils.renderIntoDocument(<Button disabled={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-disabled');
    });

    it('transfers the `disabled` property to the button', function() {
        let doc = TestUtils.renderIntoDocument(<Button disabled={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().disabled).toBe(true);
    });

    it('adds the `pure-button-primary` class if the `primary` property if set to true', function() {
        let doc = TestUtils.renderIntoDocument(<Button primary={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-primary');
    });

    it('adds the `pure-button-xsmall` class if the `size` property if set to `xsmall`', function() {
        let doc = TestUtils.renderIntoDocument(<Button size='xsmall' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-xsmall');
    });

    it('adds the `pure-button-small` class if the `size` property if set to `small`', function() {
        let doc = TestUtils.renderIntoDocument(<Button size='small' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-small');
    });

    it('adds the `pure-button-large` class if the `size` property if set to `large`', function() {
        let doc = TestUtils.renderIntoDocument(<Button size='large' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-large');
    });

    it('adds the `pure-button-xlarge` class if the `size` property if set to `xlarge`', function() {
        let doc = TestUtils.renderIntoDocument(<Button size='xlarge' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'button');
        expect(el.getDOMNode().className).toBe('pure-button pure-button-xlarge');
    });
});
