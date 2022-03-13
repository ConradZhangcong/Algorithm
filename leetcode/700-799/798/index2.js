/**
 * @param {number[]} nums
 * @return {number}
 */
 var bestRotation = function (nums) {
  let max = 0; // 最大值
  let result = 0; // 最大值对应的下标
  const length = nums.length;
  // 创建长度为length*2的数组 减少数组搬迁的时间消耗
  const arr = new Array(length * 2).fill(0);
  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i];
  }

  // 遍历每一次数组搬迁
  let index = 0;
  while (index < length) {
    let point = 0;
    for (let i = index; i < length + index; i++) {
      if (arr[i] <= i - index) {
        point++;
      }
    }
    // 数组搬迁
    arr[length + index] = arr[index];
    if (max < point) {
      max = point;
      result = index;
    }
    index++;
  }

  return result;
};

console.log(bestRotation([2, 3, 1, 4, 0]));
