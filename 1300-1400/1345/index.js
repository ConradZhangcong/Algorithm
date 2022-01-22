const minJumps = (arr) => {
  if (arr.length === 1) return 0;

  // 预处理数据 去除中间连续重复的数据
  const handledArr = preHandleArr(arr);
  const length = handledArr.length;

  // 初始化
  let step = 0;
  let queue = []; // 存储原数组下标
  let tempQueue = [];
  const visited = new Array(length).fill(0); // 已访问过的节点 0为未访问 1未已访问
  // 处理第一步
  queue.push(0);
  visited[0] = 1;
  // bfs处理每一步
  while (queue.length !== 0) {
    const currentIndex = queue.pop();
    if (currentIndex === length - 1) return step;

    if (currentIndex + 1 < length && visited[currentIndex + 1] === 0) {
      tempQueue.push(currentIndex + 1);
      visited[currentIndex + 1] = 1;
    }
    if (currentIndex - 1 > 0 && visited[currentIndex - 1] === 0) {
      tempQueue.push(currentIndex - 1);
      visited[currentIndex - 1] = 1;
    }
    for (let i = length - 1; i > 0; i--) {
      if (
        handledArr[currentIndex] === handledArr[i] &&
        currentIndex !== i &&
        visited[i] === 0
      ) {
        tempQueue.push(i);
        visited[i] = 1;
      }
    }
    if (queue.length === 0 && tempQueue.length > 0) {
      queue = tempQueue;
      tempQueue = [];
      step++;
    }
  }
};

/**
 * 预处理数组 如果有连续两个以上相等的数字 只保留两个
 */
const preHandleArr = (arr) => {
  let temp;
  let flag = true;
  const result = [];
  for (let i in arr) {
    if (arr[i] !== temp) {
      temp = arr[i];
      result.push(temp);
      flag = 1;
    } else {
      if (flag === 1) {
        result.push(temp);
        flag = 2;
      } else {
        flag = 0;
      }
    }
  }

  return result;
};
