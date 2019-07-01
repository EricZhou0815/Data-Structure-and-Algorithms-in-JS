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

