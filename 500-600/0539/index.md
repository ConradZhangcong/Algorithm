# 539. 最小时间差

链接：https://leetcode-cn.com/problems/minimum-time-difference

## 思路

1. 抽屉原理(鸽巢原理) 一天有 1440 分钟 如果超过 1440 个数据, 则必定有重复的数据
2. 将时分转为分钟的数字, 排序后依次计算差值, 需要注意首位两项的时间处理
