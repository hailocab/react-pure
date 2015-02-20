"use strict";

module.exports = function () {
    for (var _len = arguments.length, cls = Array(_len), _key = 0; _key < _len; _key++) {
        cls[_key] = arguments[_key];
    }

    return cls.reduce(function (res, c) {
        if (c) res.push(c);
        return res;
    }, []).join(" ");
};