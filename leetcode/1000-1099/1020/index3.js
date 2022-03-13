var numEnclaves = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const uf = new UnionFind(grid);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const index = i * n + j;
        if (j + 1 < n && grid[i][j + 1] === 1) {
          uf.union(index, index + 1);
        }
        if (i + 1 < m && grid[i + 1][j] === 1) {
          uf.union(index, index + n);
        }
      }
    }
  }
  let enclaves = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (grid[i][j] === 1 && !uf.isOnEdge(i * n + j)) {
        enclaves++;
      }
    }
  }
  return enclaves;
};

class UnionFind {
  constructor(grid) {
    const m = grid.length,
      n = grid[0].length;
    this.parent = new Array(m * n).fill(0);
    this.onEdge = new Array(m * n).fill(false);
    this.rank = new Array(m * n).fill(0);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          const index = i * n + j;
          this.parent[index] = index;
          if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
            this.onEdge[index] = true;
          }
        }
      }
    }
  }

  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i]);
    }
    return this.parent[i];
  }

  union(x, y) {
    const rootx = this.find(x);
    const rooty = this.find(y);
    if (rootx !== rooty) {
      if (this.rank[rootx] > this.rank[rooty]) {
        this.parent[rooty] = rootx;
        this.onEdge[rootx] |= this.onEdge[rooty];
      } else if (this.rank[rootx] < this.rank[rooty]) {
        this.parent[rootx] = rooty;
        this.onEdge[rooty] |= this.onEdge[rootx];
      } else {
        this.parent[rooty] = rootx;
        this.onEdge[rootx] |= this.onEdge[rooty];
        this.rank[rootx]++;
      }
    }
  }

  isOnEdge(i) {
    return this.onEdge[this.find(i)];
  }
}
