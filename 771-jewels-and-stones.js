/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  let number = 0;
  const stoneArr = [...stones];
  for (let i = 0; i < jewels.length; i++) {
      for (let k = stoneArr.length; k >= 0; k--) {
          if (jewels[i] === stoneArr[k]) {
              stoneArr.splice(k, 1);
              number++;
          }
      }
  }
  return number;
};