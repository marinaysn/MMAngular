//ex1
// 2 ways to create string

var test1: string = 'test string 1';
var test2: String = new String('test string 2')

function createString1(): string {
    return "Test string 1 Function";
}

function createString2(): String {
    return new String("Test string 2 Function");
}

let time1: number = Date.now();
for (let i =0; i <50000; i++){
    createString1();
}

let time2: number = Date.now();
console.log("Time difference in 1: ", time2 - time1);

time1 = Date.now();
for (let i =0; i <50000; i++){
    createString2();
}

time2  = Date.now();
console.log("Time difference in 2: ", time2 - time1);

//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex




//ex