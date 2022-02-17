/**
 * 辗转相除法(欧几里得算法) 求最大公约数
 * a > b
 * @param {number} a
 * @param {number} b
 * @returns 两个数的最大公约数
 */
const gcd = (a, b) => {
  if (a === 0) return 1;
  if (b === 0) return a;
  return gcd(b, a % b);
};

/**
 * @param {[number, number]} fraction 分数
 */
const simpleFraction = (fraction) => {
  const n = gcd(fraction[1], fraction[0]);
  return [fraction[0] / n, fraction[1] / n];
};

const DIRS = [
  [1, 2],
  [2, 1],
  [1, -2],
  [2, -1],
  [-1, 2],
  [-2, 1],
  [-1, -2],
  [-2, -1],
];

/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
  if (k === 0) return 1;

  let queueMap = new Map([[`${row}/${column}`, 1]]);
  let queueLength = 1;
  let res = [1, 1]; // 分子, 分母
  const visited = new Array(n).fill(0); // 当前节点移动后仍在棋盘上的概率
  for (let i in visited) {
    visited[i] = new Array(n).fill(-1);
  }

  for (let i = 0; i < k; i++) {
    const newQueueMap = new Map(); // 完成一次前进后 新的可能的位置
    let newLength = 0;
    let successedTimes = 0;
    for (let [item, value] of queueMap) {
      const [r, c] = item.split("/");
      if (visited[r][c] !== -1) {
        // 有缓存
        let count = 0;
        for (let item of visited[r][c]) {
          const [nRow, nColumn] = item.split("/");
          const nextCount = visited[r][c].length;
          newQueueMap.has(`${nRow}/${nColumn}`)
            ? newQueueMap.set(
                `${nRow}/${nColumn}`,
                newQueueMap.get(`${nRow}/${nColumn}`) + value
              )
            : newQueueMap.set(`${nRow}/${nColumn}`, value);
          count += value;
          newLength += value;
        }
        successedTimes += count;
      } else {
        let count = 0;
        const visitedItem = []; // 下一步可以走的位置 `row/col`[]
        for (let [x, y] of DIRS) {
          const nRow = ~~r + x;
          const nColumn = ~~c + y;
          if (nRow >= 0 && nRow < n && nColumn >= 0 && nColumn < n) {
            visitedItem.push(`${nRow}/${nColumn}`);
            newQueueMap.has(`${nRow}/${nColumn}`)
              ? newQueueMap.set(
                  `${nRow}/${nColumn}`,
                  newQueueMap.get(`${nRow}/${nColumn}`) + value
                )
              : newQueueMap.set(`${nRow}/${nColumn}`, value);
            count += value;
            newLength += value;
          }
        }
        visited[r][c] = visitedItem;
        successedTimes += count;
      }
    }
    // 计算结果并且初始化
    res = simpleFraction([res[0] * successedTimes, res[1] * queueLength * 8]);
    queueMap = newQueueMap;
    queueLength = newLength;
  }

  const ans = res[1] === 0 ? 0 : res[0] / res[1];
  return ans;
};
