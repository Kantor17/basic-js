const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  makeTable() {
    const table = [];
    for (let i = 0; i < arr_EN.length; i++) {
      const row = [];
      let curr = table.length;
      for (let j = 0; j < arr_EN.length; j++) {
        if (curr === arr_EN.length) curr = 0;
        row.push(arr_EN[curr]);
        curr++
      }
      table.push(row);
    }
    return table;
  }
  encrypt(string, keyword) {
    if (typeof string === 'undefined' || typeof keyword === 'undefined') {
      throw new Error('Incorrect arguments!')
    }
    let res = '';
    const table = this.makeTable();
    let keyCharIndex = 0;
    let additionIndex = 0;
    for (let i = 0; i < string.length; i++) {
      if (typeof keyword[i] === 'undefined') {
        keyword = keyword + keyword[additionIndex++];
      }
      const stringChar = string[i].toUpperCase();
      const keyChar = keyword[keyCharIndex].toUpperCase();
      if (arr_EN.indexOf(stringChar) === -1) {
        res += stringChar;
      } else {
        res += table[arr_EN.indexOf(stringChar)][arr_EN.indexOf(keyChar)];
        keyCharIndex++;
      }
    }
    if (this.isDirect) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }

  }
  decrypt(string, keyword) {
    if (typeof string === 'undefined' || typeof keyword === 'undefined') {
      throw new Error('Incorrect arguments!')
    }
    let res = '';
    const table = this.makeTable();
    let keyCharIndex = 0;
    let additionIndex = 0;
    for (let i = 0; i < string.length; i++) {
      if (typeof keyword[i] === 'undefined') {
        keyword = keyword + keyword[additionIndex++];
      }
      const stringChar = string[i].toUpperCase();
      const keyChar = keyword[keyCharIndex].toUpperCase();
      if (arr_EN.indexOf(stringChar) === -1) {
        res += stringChar;
      } else {
        res += arr_EN[table[arr_EN.indexOf(keyChar)].indexOf(stringChar)];
        keyCharIndex++;
      }
    }
    if (this.isDirect) {
      return res;
    } else {
      return res.split('').reverse().join('');
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};