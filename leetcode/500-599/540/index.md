# 540. 有序数组中的单一元素

链接：https://leetcode-cn.com/problems/single-element-in-a-sorted-array

题目要求时间复杂度为`O(log n)`, 那么极有可能使用二分查找.

分析后可以发现, 不同的数字出现的位置必定为奇数位(下标为偶数).

## 思路 1

二分查找, 每次`mid`去中间值的并减为偶数, 如果`mid`与`mid+1`位置相同则左边全部相等, `left`位置设置为`mid+2`, 否则`right`位置设置为`mid`

## 思路 2

遍历每一位, 进行位异或运算, 最终结果即为唯一的不同的数

## 思路 3

遍历数组, 步长为 2, 如果与后一位不同则为唯一不同的数