/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
const firstCompleteIndex = (arr, mat) => {
  const m = mat.length;
  const n = mat[0].length;
  const posMap = {};

  const xArr = new Array(m).fill(n);
  const yArr = new Array(n).fill(m);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      posMap[mat[i][j]] = [i, j];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const [x, y] = posMap[arr[i]];
    xArr[x]--;
    yArr[y]--;
    if (xArr[x] === 0 || yArr[y] === 0) {
      return i;
    }
  }
};
