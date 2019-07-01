//Last in, first out.

//functions: 
//push: add the last element. 
//pop: remove the fist element (top one).
//peek: display the top element of the stack.
//length: get the number of elements in the stack.

//Example: To check if a string is a palindrome. Store the word in a stack
//In javaScript, array() is stack.

let letters = []; //this is our stack

let word = "racecar"; //the word to store in a stack

let rword = "";

//put letters of word into stack
for(let i=0;i<word.length;i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for (let i=0;i<word.length;i++){
    rword+=letters.pop();
}

if(word===rword){
    console.log(`${word} is a palindrome.`);
}
else{
    console.log(`${word} is a laindrome.`);
}