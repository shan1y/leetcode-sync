/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (typeof x === "number") {
    x = x.toString();
  }
  let reversed = [];
  let splitString = x.split("");
  splitString.forEach((character) => {
    reversed.unshift(character);
  });
  return reversed.join("") === splitString.join("");
};