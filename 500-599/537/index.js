/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const [real1, imaginaryi1] = splitComplexNumber(num1);
  const [real2, imaginaryi2] = splitComplexNumber(num2);

  const realAdd = real1 * real2 - imaginaryi1 * imaginaryi2;
  const imaginaryiAdd = real1 * imaginaryi2 + real2 * imaginaryi1;

  return realAdd.toString() + "+" + imaginaryiAdd.toString() + "i";
};

/**
 * 拆分复数
 * @param {*} num 
 * @returns 实部和虚部的数字部分
 */
const splitComplexNumber = (num) => {
  const [real, imaginaryi] = num.split("+");
  const length = imaginaryi.length;

  return [real, imaginaryi.substring(0, length - 1)];
};
