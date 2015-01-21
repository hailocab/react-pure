jest.dontMock('../Table');
jest.dontMock('../utils/joinClasses');

describe('Table', () => {
    import React from 'react/addons';
    import Table from '../Table';
    let {TestUtils} = React.addons;

    it('renders a table with class `pure-table` by default', () => {
        let doc = TestUtils.renderIntoDocument(<Table className='my-table' />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'table');
        expect(el.getDOMNode().className).toBe('pure-table my-table');
    });

    it('adds the `pure-table-bordered` class if the `bordered` property is set to true', () => {
        let doc = TestUtils.renderIntoDocument(<Table bordered={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'table');
        expect(el.getDOMNode().className).toBe('pure-table pure-table-bordered');
    });

    it('adds the `pure-table-horizontal` class if the `horizontal` property is set to true', () => {
        let doc = TestUtils.renderIntoDocument(<Table horizontal={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'table');
        expect(el.getDOMNode().className).toBe('pure-table pure-table-horizontal');
    });

    it('adds the `pure-table-striped` class if the `striped` property is set to true', () => {
        let doc = TestUtils.renderIntoDocument(<Table striped={true} />);
        let el = TestUtils.findRenderedDOMComponentWithTag(doc, 'table');
        expect(el.getDOMNode().className).toBe('pure-table pure-table-striped');
    });
});
