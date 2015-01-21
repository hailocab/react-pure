"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

jest.dontMock("../index");

describe("lib", function () {
  it("exposes the `Button`, `Cell`, `Menu` and `Table` components and the `joinClasses` util", function () {
    var Pure = _interopRequire(require("../"));

    expect(Pure.Button).toBeDefined();
    expect(Pure.Cell).toBeDefined();
    expect(Pure.Menu).toBeDefined();
    expect(Pure.Table).toBeDefined();
    expect(Pure.joinClasses).toBeDefined();
  });
});