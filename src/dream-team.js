const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }
  const res = [];
  for(let member of members) {
    if(typeof member === 'string') {
      res.push(member.trim()[0]);
    }  
  }

  return res.sort((a, b) => {
  if(a.toLowerCase() > b.toLowerCase()) {
  	return 1;
  }else {
  	return -1;
  }
  }).join('').toUpperCase();
}


module.exports = {
  createDreamTeam
};
