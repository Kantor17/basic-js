const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  const res = [];
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    switch (item) {
      case '--double-next':
        if (typeof arr[index + 1] !== 'undefined') {
          res.splice(index, 2, arr[index + 1])
        }
        break;
      case '--double-prev':
        if (typeof res[index - 1] !== 'undefined') {
          res.splice(index, 2, res[index - 1])
        }
        break;
      case '--discard-next':
        index++
        break;
      case '--discard-prev':
        if (typeof res[index - 1] !== 'undefined') {
          res.splice(index - 1, 1);
        }
        break;
      default:
        res.push(item);
    }
  }
  return res;
}

module.exports = {
  transform
};