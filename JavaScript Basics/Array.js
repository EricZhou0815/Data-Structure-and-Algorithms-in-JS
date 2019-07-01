/** Array */

/** 
 * In JS, an array is a stack like structure.
*/

const sandwich=["peanut butter","jelly","bread"];
const teams=[["Eric",23],["Ada",19]];

console.log(sandwich[1]);
// jelly
console.log(teams[1][0]);
// Ada

/** Change an element in the array */
sandwich[1]="juice";
console.log(sandwich);
// [ 'peanut butter', 'juice', 'bread' ]

/** loop each element in an array: forEach() */
sandwich.forEach(function(element){
    console.log(element);
});
// peanut butter
// juice
// bread


/** Array Methods */

const arr=["a","b","c"];

/** push() */
/** Add new element to the array.*/
arr.push("d");
console.log(arr);
// [ 'a', 'b', 'c', 'd' ]

/** pop() */
/** Remove the last element and return that element.*/
console.log(arr.pop());
// d
console.log(arr);
// [ 'a', 'b', 'c']

/** shift() */
/** Remove the first element and return that element. This operates on the 
 * original array.
*/
let arr_0=["a","b","c"];
arr_01=arr_0.shift();
console.log(arr_01);
// a
console.log(arr_0);
// [ 'b', 'c' ]

/** unshift() */
/** Add element to the first place of an array. Returns the number of elements. 
*/
let arr_5=["a","b","c"];
arr_05=arr_5.unshift("1");
console.log(arr_05);
// 4
console.log(arr_5);
// [ '1', 'a', 'b', 'c' ]

/** concat() */
/** Add new array to the original array.*/
const arr2=["g","q"];
console.log(arr.concat(arr2));
// [ 'a', 'b', 'c', 'g', 'q' ]

/** join() */
/** Jion the elements of an array and convert it into a string. */
console.log(arr.join("+"));
// a+b+c

/** Reverse() */
/** Reverse the elements of an array. */
const arr_1=arr.reverse();
console.log(arr_1);
// [ 'c', 'b', 'a' ]

/** slice() */
/** slice the array with indexes range [index1,index2), return a new
 * array.
 * slice does not change the origional array.
 */
const arr_3=["c","g","M"];
arr_03=arr_3.slice(1,3);
console.log(arr_03);
// [ 'g', 'M' ]
console.log(arr_3);
// [ 'c', 'g', 'M' ]

/** splice() */
/** slice the array with start position and number of element
 * you want to slice, can add new element from that position to the 
 * original array, return the removed elements.
 * splice does change the origional array.
 */
const arr_6=["c","g","M"];
arr_06=arr_6.splice(1,2,"t"); // remove items from index 1 with 2 elements, add "t" to the origional
console.log(arr_06); 
// [ 'g', 'M' ]
console.log(arr_6);
// [ 'c', 't' ]


/** sort() */
/** Sort the array. Return the original sorted array. */
const arr_4=["c","g","M","m",3,"+"];
arr_04=arr_4.sort();
console.log(arr_04);
// [ '+', 3, 'M', 'c', 'g', 'm' ]



/** Copying Arrays */
const original=[true,true,undefined,false,null];

// slice
const copy1=original.slice(0);
console.log(copy1);

// spread operator
//const copy2=[...origional];
//console.log(copy2);

/** The above two will not work if there is object inside the array,
 *  then you need to use DEEP copying.
 *  Because when a oject inside an array, normally we just copy the pointer
 *  to the object. so when add, we add to the pointer of the origional array.
 */
// DEEP copying 
let deepArray_1=[["Eric"]];
let deepArray_2=[["Eric"]];
let shallowCopy=deepArray_1.slice(0);

shallowCopy[0].push(" is great!");
console.log(deepArray_1[0],shallowCopy[0]);
// both is added with "is great!"
// [ 'Eric', ' is great!' ] [ 'Eric', ' is great!' ]

// The DEET Copy
// convert the array into json, then convert json into js object or array.
const deepCopy=JSON.parse(JSON.stringify(deepArray_2));

deepCopy[0].push(" is great!");
console.log(deepArray_2[0],deepCopy[0]);
// [ 'Eric' ] [ 'Eric', ' is great!' ]
// the original remian origional!
