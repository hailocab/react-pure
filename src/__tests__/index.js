jest.dontMock('../index');

import Pure from '../index';

describe('lib', () => {
    it('exposes the `Button`, `Cell`, `Menu` and `Table` components and the `joinClasses` util', () => {
        expect(Pure.Button).toBeDefined();
        expect(Pure.Cell).toBeDefined();
        expect(Pure.Menu).toBeDefined();
        expect(Pure.Table).toBeDefined();
        expect(Pure.joinClasses).toBeDefined();
    });
});
