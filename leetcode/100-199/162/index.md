# 162. 寻找峰值

## 思路

有题意可得: 数组下标-1 以及 length 的位置为负无穷 并且不会有连续相同的值 因此必定会有一个或者多个峰值

![思路](./1.PNG)

那么随便找到一个点, 判断这个点左边或者右边的值的大小, 通过二分查找往比这个值大的方向查找, 找到第一个峰值为止