const numberOfSteps = (num) => {
  let result = 0;
  while (num !== 0) {
    num % 2 === 0 ? (num /= 2) : num--;
    result++;
  }
  return result;
};
