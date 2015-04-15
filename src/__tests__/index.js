jest.dontMock('../index');
const Pure = require('../index');

describe('lib', () => {
    it('exposes the `Button`, `Cell`, `Menu`, `MenuItem` and `Table` components', () => {
        expect(Pure.Button).toBeDefined();
        expect(Pure.Cell).toBeDefined();
        expect(Pure.Menu).toBeDefined();
        expect(Pure.MenuItem).toBeDefined();
        expect(Pure.Table).toBeDefined();
    });
});
