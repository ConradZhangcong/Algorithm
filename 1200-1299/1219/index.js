/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let result = 0;

  const dfs = (x, y, gold) => {
    gold += grid[x][y];
    result = Math.max(result, gold);

    const rec = grid[x][y];
    grid[x][y] = 0;

    for (let d = 0; d < 4; d++) {
      const nx = x + DIR[d][0];
      const ny = y + DIR[d][1];
      if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] > 0) {
        dfs(nx, ny, gold);
      }
    }

    grid[x][y] = rec;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== 0) {
        dfs(i, j, 0);
      }
    }
  }

  return result;
};

const DIR = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ])
);
