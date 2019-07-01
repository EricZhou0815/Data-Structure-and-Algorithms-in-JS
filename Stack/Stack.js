// Create a stack

class Stack {
    constructor (){
    this.count = 0;
    this.items = [];
    }

    //Add a value onto the end of the stack
    push(value){
        this.items[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    pop (){
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    size(){
        return this.count;
    }

    //Returns the value at the end of the stack
    peek(){
        return this.items[this.count - 1];
    }

}

var myStack = new Stack();

myStack.push(1);
myStack.push(6);
myStack.push(7);
console.log(myStack.peek());
console.log(myStack.size());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.size());

