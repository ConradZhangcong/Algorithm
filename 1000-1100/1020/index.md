# 1020. 飞地的数量

链接：https://leetcode-cn.com/problems/number-of-enclaves

## 思路 1

深度优先遍历(DFS), 从边界开始遍历, 标记访问过的位置.

遍历完成后查找中间一块区域是否有`值为1(陆地)`, 并且没有被访问过.

## 思路 2

广度优先遍历(BFS)

## 思路 3

并查集
