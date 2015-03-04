"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../index");

var Pure = _interopRequire(require("../index"));

describe("lib", function () {
    it("exposes the `Button`, `Cell`, `Menu`, `MenuItem` and `Table` components", function () {
        expect(Pure.Button).toBeDefined();
        expect(Pure.Cell).toBeDefined();
        expect(Pure.Menu).toBeDefined();
        expect(Pure.MenuItem).toBeDefined();
        expect(Pure.Table).toBeDefined();
    });
});