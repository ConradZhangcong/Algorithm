# 二分查找

二分查找的时间复杂度是`O(logN)`

二分查找主要分为三个部分:

1. **预处理** - 如果数据未排序, 先进行排序
2. **二分查找** - 使用循环或者递归在每次比较后将空间分为两半
3. **后处理** - 在剩余空间中确定可行的候选者

语法模板:

1. 初始条件: `left = 0, right = length - 1`
2. 终止: `left > right`
3. 向左查找(设置右边界): `right = mid - 1`
4. 向右查找(设置左边界): `left = mid + 1`

```js
const bsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
```

需要注意一下有三个易错点:

1. **循环退出的条件**: `left <= right`
2. **mid 的取值**: 可以使用位运算来计算 mid `mid = left + ((right - left) >> 1)`
3. **left 和 right 的更新**: `left = mid + 1` `right = mid - 1`

## 变种 1: 找到第一个等于目标值的下标

```js
const bsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
```

重点是`nums[mid] === target`时需要特殊判断

当`mid`为`0`时, 必定为第一个元素;

当`mid`左边一个元素与`mid`不相等时, `mid`即为临界情况, 即结果;

否则将`right`设置为`mid - 1`, 因为此时目标结果必定在`[left, mid - 1]`之间.

## 变种 2: 找到最后一个等于目标值的下标

```js
const bsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
```

与变种 1 逻辑相同

## 变种 3: 找到第一个大于目标值的下标

```js
const bsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if ((nums[mid] = target)) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      if (mid === 0 || nums[mid - 1] < value) {
        return mid;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
```

如果`nums[mid]`小于目标值, 那么结果必定在`[mid + 1, right]`之间;

否则结果在`[left, mid]`之间, 需要判断`mid`左边一个值: 如果`mid - 1`小于目标值, 那么所求结果就是`mid`, 同时需要考虑左边没有元素的边界; 如果`mid - 1`大于目标值, 限制右边界范围.

## 变种 4: 找到第一个小于目标值的下标

```js
const bsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if ((nums[mid] = target)) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      if (nums[mid + 1] > value || mid === nums.length - 1) {
        return mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
};
```

逻辑同变种 3
