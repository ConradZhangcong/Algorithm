/**
 * @param {number[][]} grid
 * @return {number[]}
 */
 var findBall = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const answer = new Array(n).fill(-1);

  // 每个球进入循环
  for (let col = 0; col < n; col++) {
    let index = col; // 起始位置
    for (let row = 0; row < m; row++) {
      if (grid[row][index] === 1) {
        if (grid[row][index + 1] === 1 && index + 1 < m) {
          index++;
        } else {
          index = null;
          break;
        }
      } else {
        if (grid[row][index - 1] === -1 && index - 1 >= 0) {
          index--;
        } else {
          index = null;
          break;
        }
      }
    }
    answer[col] = index === null ? -1 : index;
  }

  return answer;
};

console.log(
  findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1],
  ])
);
