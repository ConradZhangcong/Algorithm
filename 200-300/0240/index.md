# 240. 搜索二维矩阵 II

链接：https://leetcode-cn.com/problems/search-a-2d-matrix-ii

## 思路 1

循环每一行, 每一行中二分查找

## 思路 2

Z 字查找法, 矩阵为 m\*n, 从矩阵的右上角 (x = 0, y = m - 1)开始找

如果`matrix[x][y] > target`, 那么往左移动一位`y--`; 如果`matrix[x][y] < target`, 往下移动一位`x++`; `matrix[x][y] = target`则返回 true

边界情况为查找到边界, 即`x = m || y = 0`
