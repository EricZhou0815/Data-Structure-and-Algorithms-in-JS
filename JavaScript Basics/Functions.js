/** Functions */
/** A function is a javaScriot procedure that do something or return something given some input. */


function square(number){
    return number*number;
}

console.log(square(5));
// 25

function add_square(a, b){
    return square(a)+square(b);
}
console.log(add_square(4,6));

/** 
 * Scope is the visibility of variables.
 * let is scoped declaration, var is not scoped. Recommend use let/const.
 * Hoisting: when js running program, js will move all variable declaration to the top, 
 * but not the definition, before running other codes. 
 * 
*/

//console.log(declaredVar);
// err: undefined (because it is just been declared before the function, 
// but not defined before the function (assign a value).)
let declaredVar=5;


/** == vs === */
/**
 *  == Equality operator or abstract equality: js will convert the datatypes to the same then compare the VALUE.
 *  === Identity operator or strict equality: js will not convert data type and just compare both the TYPE and VALUE.
 */

 console.log(3=="3");
 // true
 console.log(3==="3");
 // false

 console.log(true=="1");
 // true
 console.log(true==="1");
 // false 

 console.log("This is a string."==new String("This is a string."));
 // true
 console.log("This is a string."===new String("This is a string."));
 // false


