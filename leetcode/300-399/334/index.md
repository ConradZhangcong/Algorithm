# 334. 递增的三元子序列

链接：https://leetcode-cn.com/problems/increasing-triplet-subsequence

## 思路

创建两个数组, `leftMin`存储当前位置及其左边最小的值, `rightMax`存储当前位置及其右边最大的指.

## 思路 2

维护两个变量`first` `second` 任何时候都有`second > first`, 初始化时 `first = nums[0], scond = Number.MAX_VALUE` , 遍历数组, 执行一下操作:

1. 如果`num > second`, 返回 true
2. 如果`num > first`, `second`更新为`num`
3. 如果`num < first`, `first`更新为`num`
