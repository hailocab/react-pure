"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

jest.dontMock("../joinClasses");

var joinClasses = _interopRequire(require("../joinClasses"));

describe("joinClasses", function () {
    it("merges all values to a String", function () {
        var cls = joinClasses("hello", "world");
        expect(cls).toBe("hello world");
    });

    it("removes falsy expressions", function () {
        var cls = joinClasses("hello", null, !!"" && "world", 1 && "there");
        expect(cls).toBe("hello there");
    });
});