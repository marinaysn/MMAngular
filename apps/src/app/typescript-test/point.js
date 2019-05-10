"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    //make parameters optional
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this._x + ' and Y : ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less thatn 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
;
