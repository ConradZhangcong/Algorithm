# 2100. 适合打劫银行的日子

链接：https://leetcode-cn.com/problems/find-good-days-to-rob-the-bank

## 思路1: 模拟

根据题意编写逻辑 需要注意边界情况已经判断递增递减的边界

## 思路2: 前缀和

1. 创建两个长度为`security.length`的数组, 分别记录下标位置非递增和非递减的天数.
2. 遍历`security`, 判断是否满足条件


