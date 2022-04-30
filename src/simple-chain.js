const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`~( ${value} )~`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || typeof this.chain[position - 1] === 'undefined') {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finished = this.chain.join('');
    this.chain = [];
    return finished.slice(1, finished.length - 1);
  }
};

module.exports = {
  chainMaker
};