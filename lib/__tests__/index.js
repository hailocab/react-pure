'use strict';

jest.dontMock('../index');
var Pure = require('../index');

describe('lib', function () {
    it('exposes the `Button`, `Cell`, `Menu`, `MenuItem` and `Table` components', function () {
        expect(Pure.Button).toBeDefined();
        expect(Pure.Cell).toBeDefined();
        expect(Pure.Menu).toBeDefined();
        expect(Pure.MenuItem).toBeDefined();
        expect(Pure.Table).toBeDefined();
    });
});