/**
 * 883. 三维形体投影面积
 * https://leetcode-cn.com/problems/projection-area-of-3d-shapes/
 * 分别计算三个平面的面积
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const length = grid.length;

  let top = 0,
    xArea = 0,
    yArea = 0;

  for (let i = 0; i < length; i++) {
    let max = 0;
    xArea += Math.max(...grid[i]);
    for (let j = 0; j < length; j++) {
      max = Math.max(max, grid[j][i]);
      if (grid[i][j] !== 0) {
        top++;
      }
    }
    yArea += max;
  }

  return top + xArea + yArea;
};
