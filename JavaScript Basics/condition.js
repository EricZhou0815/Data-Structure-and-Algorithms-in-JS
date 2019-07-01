/** Condition */

/** 
 * if else can be replaced with (bool && function() ).
*/


function doorIsOpen(){
    console.log("The door is open.");
}

function doorIsClosed(){
    console.log("The door is closed.");
}

function openDoor(isOpen){
    if(isOpen){
        doorIsOpen();
    }else{
        doorIsClosed();
    }
}

function newOpenDoor(isOpen){
    (isOpen && doorIsOpen());
    (!isOpen && doorIsClosed());
}

openDoor(false);
newOpenDoor(false);
// The door is closed.
(false || doorIsOpen());
// The door is open.

/** Use this shortcut evaluation to set default value for variable. */
function Greeting(nameInput){
    name=nameInput || "Eric";
    console.log(`Hello ${name}!`);
}

Greeting();
Greeting("Tom");

/** Ternary Operator */

// condition ? expr1：expr2
function newGreet(ifBoy){
    const greeting=ifBoy?"Hello guys!":"Hello grils!";
    console.log(greeting);
}

newGreet(true);
// Hello guys!

let age=15;
console.log((age>=18)?"You can smoke!":"Sorry, you can't smoke yet.");
// Sorry, you can't smoke yet.


/** Switch */
