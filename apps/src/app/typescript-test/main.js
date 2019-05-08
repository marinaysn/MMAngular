//ex1
// function foo(num) {
//     for (let i =0; i < num; i++){
//         console.log(i);
//     }
//     console.log('Final: ' + i);
// }
// foo(5);
//ex 2
// let count = '5';
// count = 5;
//ex 3
var a;
a = 1;
a = true;
a = 'a';
var b;
var c;
var d;
var e;
var f = [1, 2, 3];
var g = ['a', 'b', 'c'];
var colorRed = 0;
var colorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var background = Color.Red;
