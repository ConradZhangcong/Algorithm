const chalkReplacer = (chalk, k) => {
  let sum = 0;

  // 一次循环计算数组所有元素之和
  for (let i = 0; i < chalk.length; i++) {
    sum += chalk[i];
    if (sum > k) {
      return i;
    }
  }

  // 计算边界情况
  const boundary = k % sum;

  // 再次循环得出答案
  return chalkReplacer(chalk, boundary);
};