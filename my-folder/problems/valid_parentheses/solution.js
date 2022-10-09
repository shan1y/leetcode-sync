/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // define our pairs in a map
    let pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    // holds our current "half"
    let dummy = [];
    // if our first "half" is an opening bracket/brace, add it to our dummy
    for (let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            dummy.push(s[i])
            // if the last index of our dummy isn't a closing bracket, it's gone.
        } else if (dummy[dummy.length -1] === pairs[s[i]]) {
            dummy.pop();
        } else return false;
    }
    return dummy.length ? false : true
};