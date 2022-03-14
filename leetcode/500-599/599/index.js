/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map(list1.map((item, index) => [item, index]));

  const result = [];
  let minIndex = Number.MAX_VALUE;

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      const index = map.get(list2[i]) + i;
      if (minIndex > index) {
        result.length = 0;
        minIndex = index;
        result.push(list2[i]);
      } else if (minIndex === index) {
        result.push(list2[i]);
      }
    }
  }

  return result;
};
