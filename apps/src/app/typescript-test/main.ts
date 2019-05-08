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

// let a: any;
// a = 1;
// a = true;
// a = 'a';

// let b: number;
// let c: boolean;
// let d: string;
// let e: any;
// let f : number[] = [1,2,3];
// let g: any[] = ['a', 'b', 'c']

// const colorRed = 0;
// const colorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red = 0, Green = 1, Blue = 2} ;
// let background = Color.Red;

//ex4:

// let message;
// message = 'abc';
// message.endsWith('c');
// console.log(message);

// //ways to force intellisense
// //method 1
// let endsWithC = (<string>message).endsWith('c');
// console.log(endsWithC);
// //method 2
// let alternativeEndsWithC  = (message as string).endsWith('c');
// console.log(alternativeEndsWithC);

//ex5

// let log = function (msg1) {
//     console.log(msg1);
// }

// let doLog = (msg2) => console.log(msg2);

//ex6
//introduce interfaces:
// interface Point{
//     x: number,
//     y: number
// };

// let drawPoints = (x, y) => {
//     //...
// }

// let drawPoints2 = (point: Point) => {
//     //...
// }

// drawPoints2({
//     x:1,
//     y:2
// })

//ex7
//introduce classes:
// class Point{
//     private x: number;
//     private y: number;

//     //make parameters optional
//     constructor(x?: number, y?: number){
//         this.x = x;
//         this.y = y;
//     }

//    draw() {
//        console.log('X : ' + this.x + ' and Y : ' + this.y);
//    }
// };

// let point  = new Point(5,7);

// point.draw();

//ex8
//move Point class into separate file:
import { Point} from './point';

let point = new Point(5, 7);
let x = point.x;
point.x = 10;

point.draw();