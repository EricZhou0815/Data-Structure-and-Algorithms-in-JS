/** Data types */
/** 7 data types in javaScript. */

// Boolean
let ImOld=false;
console.log(ImOld);
// false

// Null
// null means it has no value.
// js take null as ZERO in operation by deault.
let myMoney=null;
console.log(myMoney); 
console.log(myMoney*5);
// null
// 0

// Undefined
// undefined means the variable is not declared or is declared or created the memory, but not assigned the value.
let a;
console.log(a);
// undefined
console.log(a+3);
// NaN (means it's not a number)

/** Null vs Undefined */
/**
 * Null : assigned an empty value. Null is a special js object. In computation, js will treat
 * null as 0 by default.
 * Undefined: declared but not assigned. Undefined is not a number.
 * */

let test;
console.log(test);
// undefined
console.log(typeof null);
// object
console.log(typeof undefined);
// undefined
console.log(null==undefined);
// true
console.log(null===undefined);
// false

// Number
// autmo do long/short/float/int convertion.
const costOfCar=8000;
const costOfBox=25.99;
const totalCost=costOfCar+costOfBox;
console.log(totalCost);
// 8025.99

// String
// String is value type.
const name="Eric Zhou";
console.log(`Hi, my name is ${name}.`);
// Hi, my name is Eric Zhou.

// Symbol
// New data type in ES6. The instance is unique and immutable.
const sb1=Symbol("foo");
const sb2=Symbol("foo");
console.log(sb1===sb2);
// false
console.log(String(sb1)===String(sb2));
// true
console.log(String(sb1));
// Symbol(foo)


// Object
// Object is a collection of properties and methods.
const myCar=new Object();
myCar.make="Toyota";
myCar.model="R15";
myCar.color="silver";
myCar["capacity"]=4;
console.log(myCar.make);
// Toyota
console.log(myCar.capacity);
// 4

/** Convertion between data types */

/** String to Int */
const str1="007";
const num1=parseInt(str1);
console.log(num1);
// 7