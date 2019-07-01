function binary_search_iterative(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<end){
        const mid=Math.floor(start+(start+end)/2);
        if(target<arr[mid]){
            end=mid-1;
        }
        else if(target>arr[mid]){
            start=mid+1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

function binary_search_Recursive(arr,target,start,end){

    if (start>end){
        return -1;
    }
    let mid=Math.floor(start+(start+end)/2);
    if (arr[mid]===target){
        return mid;
    }
    if(target>arr[mid]){
        return binary_search_Recursive(arr,target,mid+1,end);
    }
    else{
        return binary_search_Recursive(arr,target,start,mid-1);
    }

}


const myArray=[1,3,5,7,8,9];
const myTarget=4;
const result=binary_search_iterative(myArray,myTarget);
//const resultOne=binary_search_Recursive(myArray,myTarget,0,myArray.length-1);
console.log(`Target found, the index is ${result}.`);

