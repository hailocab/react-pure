"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../index");

var Pure = _interopRequire(require("../index"));

describe("lib", function () {
    it("exposes the `Button`, `Cell`, `Menu` and `Table` components and the `joinClasses` util", function () {
        expect(Pure.Button).toBeDefined();
        expect(Pure.Cell).toBeDefined();
        expect(Pure.Menu).toBeDefined();
        expect(Pure.Table).toBeDefined();
        expect(Pure.joinClasses).toBeDefined();
    });
});