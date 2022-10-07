/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let i = 0;
  while (
    strs[0][i] &&
    strs.every((w) => {
      return w[i] === strs[0][i];
    })
  ) {
    i++;
  }
  return strs[0].substr(0, i);
};


