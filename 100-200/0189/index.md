# 189. 轮转数组

链接：https://leetcode-cn.com/problems/rotate-array

## 思路1

移除最后一个元素 往头部加入(超时)

## 思路2

额外数组存储结果, 最后替换

## 思路3

首先将数组中所有元素反转, 然后将`0-k`和`k-length`的位置分别反转即可得到结果