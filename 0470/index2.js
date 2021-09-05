/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  let str = "";
  for (let i = 0; i < 4; i++) {
    str += rand2();
  }
  const num = parseInt(str, 2) + 1;
  return num ? rand10() : num;
};

const rand2 = () => {
  const num = rand7();
  if (num < 4) {
    return 0;
  } else if (num > 4) {
    return 1;
  } else {
    return rand2();
  }
};
