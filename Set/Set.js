//Set is an array without duplicated item.

function mySet(){
    let collction=[];

    //check if the presence of an element and return true or false.
    this.has=(element)=>{
        return (collection.indexOf(element)!==-1);
    };

    //return all the values in the set
    this.value=()=>{
        return collection;
    }

    //add an element to the set
    this.add=(element)=>{
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    //remove an element from the set
    this.remove=(element)=>{
        if(this.has(element)){
            index=collection.indexOf(element);
            collection.splice(index,i);
        }
    }

    //return the size of the collection
    this.size=()=>{
        return collection.length;
    }
}