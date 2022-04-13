# 1345. 跳跃游戏 IV

链接：https://leetcode-cn.com/problems/jump-game-iv

## 思路

1. 首先预处理数组, 如果有连续的超过 2 个以上相同的数字那就只保留 2 个, 比如`[1,2,2,2,2,3,3,3,3,3]`会预处理为`[1,2,2,3,3]` (刚开始没对数组进行预处理, 碰上一大串相同数字的数组时直接超时了, 因此先对数据进行预处理)
2. BFS, 递归计算每一步数据可能会走到的点, 如果碰见下标为最后一位则返回当前步数.