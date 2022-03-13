const DIR = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  if (m <= 2 || n <= 2) return 0;

  const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

  const dfs = (grid, x, y) => {
    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      grid[x][y] === 0 ||
      visited[x][y]
    ) {
      return;
    }

    visited[x][y] = true;
    for (let [dx, dy] of DIR) {
      dfs(grid, x + dx, y + dy);
    }
  };

  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0);
    dfs(grid, i, n - 1);
  }

  for (let j = 1; j < n - 1; j++) {
    dfs(grid, 0, j);
    dfs(grid, m - 1, j);
  }

  let enclaves = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        enclaves++;
      }
    }
  }

  return enclaves;
};
