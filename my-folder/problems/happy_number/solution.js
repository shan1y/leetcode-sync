/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //create new set, collection of unique values
let myset = new Set();
    //set counter
let counter = 0;
    //while the counter isn't 1, 
while(counter!= 1 && !myset.has(n)){
    myset.add(n);
    //returns an array of the two numbers
    let number= n.toString().split('').map((element) => parseInt(element));
    //
    counter = number.reduce((acc,item)=>{
        //adds the accumulator to itself
        acc += Math.pow(item,2);
        return acc;
    },0) //0 is the initial value
    n=counter;
} return counter == 1 ? true : false;
}