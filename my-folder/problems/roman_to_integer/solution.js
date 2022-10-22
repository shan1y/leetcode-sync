/**
 * @param {string} s
 * @return {number}
 */

 let mapping = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}
 var romanToInt = function(s) {
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        

        if (s[i] in mapping) {
            if ((s[i] == 'V' || s[i] == 'X')  && (s[i- 1] == 'I') ) {
                result = result + mapping[s[i]];
                
                result = result - 2

            }
            else if ((s[i] == 'L' || s[i] == 'C')  && (s[i- 1] == 'X') ) {
                result = result + mapping[s[i]];
                
                result = result - 20
            }
            else if ((s[i] == 'D' || s[i] == 'M')  && (s[i- 1] == 'C') ) {
                result = result + mapping[s[i]];
                
                result = result - 200


            }
            else{
                result = result + mapping[s[i]]
            }  
        }   
    }

   return result;
};