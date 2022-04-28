const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(!options.repeatTimes) options.repeatTimes = 1;
  if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';
  if(typeof str !== 'string') str = String(str);
  if(typeof options.addition !== 'undefined' && typeof options.addition !== 'string') options.addition = String(options.addition);

  const res = [];
  for(let i = 0; i < options.repeatTimes; i++) {
      const string = [str];
      const additions = [];
      for(let j = 0; j < options.additionRepeatTimes; j ++) {
      	additions.push(options.addition);
      }
      string.push(additions.join(options.additionSeparator));
      res.push(string.join(''));
  } 
  return res.join(options.separator);
}

module.exports = {
  repeater
};
