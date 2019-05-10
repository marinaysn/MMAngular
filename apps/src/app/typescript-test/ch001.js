//ex1
// 2 ways to create string
var test1 = 'test string 1';
var test2 = new String('test string 2');
function createString1() {
    return "Test string 1 Function";
}
function createString2() {
    return new String("Test string 2 Function");
}
var time1 = Date.now();
for (var i = 0; i < 50000; i++) {
    createString1();
}
var time2 = Date.now();
console.log("Time difference in 1: ", time2 - time1);
time1 = Date.now();
for (var i = 0; i < 50000; i++) {
    createString2();
}
time2 = Date.now();
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
