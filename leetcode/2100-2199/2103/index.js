/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = (rings) => {
  const result = new Array(10).fill(0);

  const bitMap = {
    R: 1,
    G: 2,
    B: 4,
  };

  for (let i = 0; i < rings.length; i += 2) {
    // 加了判断速度变慢了 可以直接不加
    // if (result[rings[i + 1]] === 7) {
    //   continue
    // }
    result[rings[i + 1]] |= bitMap[rings[i]];
  }

  return result.filter((x) => x === 7).length;
};
