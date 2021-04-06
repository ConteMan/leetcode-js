/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const flag = matrix[0][0] === 0;
  let xFlag = false;
  let yFlag = false;
  for (let i = 0; i < m; i++) {
    for (let k = 0; k < n; k++) {
      const current = matrix[i][k];
      if (current === 0) {
        if (i === 0) {
          xFlag = true;
        }
        if (k === 0) {
          yFlag = true;
        }
        if (i!== 0 && k !== 0) {
          matrix[i][0] = 0;
          matrix[0][k] = 0;
        }
      }
    }
  }

  for (let i = m - 1; i > 0; i--) {
    for (let k = n - 1; k > 0; k--) {
      if (matrix[0][k] === 0 || matrix[i][0] === 0) {
        matrix[i][k] = 0;
      }
    }
  }

  if (flag || xFlag) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  if (flag || yFlag) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
};