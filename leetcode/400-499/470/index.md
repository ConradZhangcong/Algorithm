# 470. 用 Rand7() 实现 Rand10()

链接：https://leetcode-cn.com/problems/implement-rand10-using-rand7

## 思路 1

调用两次`rand7`, 求出两数之和的个位数, 如以下表格

|     | a   | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
| :-- | --- | --- | --- | --- | --- | --- | --- | --- |
| b   |     |     |     |     |     |     |     |     |
| 1   |     | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
| 2   |     | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| 3   |     | 4   | 5   | 6   | 7   | 8   | 9   | 0   |
| 4   |     | 5   | 6   | 7   | 8   | 9   | 0   | 1   |
| 5   |     | 6   | 7   | 8   | 9   | 0   | 1   | 2   |
| 6   |     | 7   | 8   | 9   | 0   | 1   | 2   | 3   |
| 7   |     | 8   | 9   | 0   | 1   | 2   | 3   | 4   |

在表格中 如果去除右上角或者左下角一块 3\*3 的区域 那么 0-9 每次出现的几率都是相同的

## 思路 2

1. 将给定的随机数方法改写成生成 0,1 的方法
2. 将需要生成的随机数用二进制表示
3. 循环生成数据并且去除不在范围内的数字