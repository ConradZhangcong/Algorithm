# 比较版本号

链接：https://leetcode-cn.com/problems/compare-version-numbers

## 思路

使用.分割两个版本号, 进行对比, 对比时直接使用`parseInt`转成数字进行比较.

需要注意两个数组的大小, 小的一个在超出下标后与大的比较时, 都为 0.
