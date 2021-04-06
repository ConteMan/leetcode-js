/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  const bankNum = accounts[0].length;
  const customNum = accounts.length;
  let maxWealth = 0;
  for (let i = 0; i < customNum; i++) {
    let tempMaxWealth = 0;
    for (let k = 0; k < bankNum; k++) {
      tempMaxWealth += accounts[i][k];
    }
    if (tempMaxWealth > maxWealth) {
      maxWealth = tempMaxWealth;
    }
  }
  return maxWealth;
};