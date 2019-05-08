export class Point {


    //make parameters optional
    constructor(private _x?: number, private _y?: number) {
    }

    draw() {
        console.log('X : ' + this._x + ' and Y : ' + this._y);
    }

    get x() { return this._x; }
    get y() { return this._y; }

    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be less thatn 0');
        }

        this._x = value;
    }
};
