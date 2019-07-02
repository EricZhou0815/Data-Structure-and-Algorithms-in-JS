/** Objects */
/** 7 data types in javaScript. */

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

// object creation: object initializer
//
let myHonda={color:"red",make:"Honda",model:"c3",capacity:"2"};
console.log(myHonda);
// { color: 'red', make: 'Honda', model: 'c3', capacity: '2' }

// object creation: constructor function
//
function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year=year;
}
let myBenz=new Car("Benz","C180L","2015");
console.log(myBenz);
// Car { make: 'Benz', model: 'C180L', year: '2015' }

// ojbect creation: Object.create
const Cat={
    type:"Animal",
    displayType:function(){
        console.log(this.type);
    }
};
let cat1=Object.create(Cat);
cat1.displayType();
// Animal

/** Using Objects for Lookups */
// Objects can be seen as key-vlue stores.
let alpha={
    1:"X",
    2:"Y",
    3:"X",
    4:"W"
};
console.log(alpha[2]);
// Y

// Remove Object Properties
let dishes={
    plates:8,
    cups:10,
    forks:28,
    bowls:13
};
delete dishes.cups;
console.log(dishes);
// { plates: 8, forks: 28, bowls: 13 }


// Testing Objects for Properties
console.log(dishes.hasOwnProperty('plates'));  // true
console.log(dishes.hasOwnProperty('book'));    // false

// Accessing and Modifying Nested Objects
// can be accessed by bracket or . ..
const ourStorage={
    "desk":{
        "drawer":"stapler"
    },
    "cabinet":{
        "top drawer":{
        "folder1":"a file",
        "folder2":"secrets"
    },
    "bottom drawer":"soda"
}
};
console.log(ourStorage.cabinet["top drawer"].folder1);
// a file


// Generate an Array of All Object keys
// get all the keys of an object
console.log(Object.keys(ourStorage));
// [ 'desk', 'cabinet' ]