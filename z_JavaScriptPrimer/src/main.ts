let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log("Total value: $" + totalValue.toFixed(2));


console.log("Hello");

let myFunc = function () {
  console.log("This is a statement");
};
myFunc();

let myFunc2 = () => {
  console.log("This is a statement 2");
};
myFunc2();


let myFunc3 = function (name, weather, ...extraArgs) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg: " + extraArgs[i]);
  }
};
myFunc3("Marina", "sunny", "one", "two", "three");

let myFunc4 = function (nameFunction) {
  return ("Hello " + nameFunction() + ".");
};
let printName = function (nameFunction, printFunction) {
  printFunction(myFunc4(nameFunction));
}
printName(function () { return "Alex" }, console.log);



let myFunc5 = (nameFunction1) => ("Hello " + nameFunction1() + ".");
let printName5 = (nameFunction1, printFunction2) => printFunction2(myFunc5(nameFunction1));

printName5(function () { return "Anna" }, console.log);

//Using Variable Closure

let myFunc6 = function(name) {
  let myLocalVar = "sunny";
  let innerFunction = function () {
  return ("Hello " + name + ". Today is " + myLocalVar + ".");
  }
  return innerFunction();
  };
  console.log(myFunc6("Alex"));


  let myArray = [13, "21 June", "Anna", true];
  for (let i = 0; i < myArray.length; i++) {
  console.log("Index " + i + ": " + myArray[i]);
  }
  console.log("---");
  myArray.forEach((value, index) => console.log("Index " + index + ": " + value));


  let myArray2 = [100, "Alex", true];
let otherArray = [...myArray2, 200, "Anna", false];
for (let i = 0; i < otherArray.length; i++) {
console.log(`Array item ${i}: ${otherArray[i]}`);
}