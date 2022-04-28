const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const combinations = [];
  let currentChar = str[0];
  let combination = [];
  for (let i = 0; i < str.length; i++) {
    combination.push(currentChar);
    if (currentChar !== str[i + 1]) {
      combination.length > 1 ? combinations.push(combination.length + combination[0]) :
        combinations.push(combination[0]);
      combination = [];
      currentChar = str[i + 1];
    }
  }
  return combinations.join('');
}

module.exports = {
  encodeLine
};