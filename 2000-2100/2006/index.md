# 2006. 差的绝对值为 K 的数对数目

链接：https://leetcode-cn.com/problems/count-number-of-pairs-with-absolute-difference-k

## 思路1

两次遍历判断两个数值的绝对值是否为k

## 思路2

一次遍历, 哈希表记录每个值出现的次数, 每次遍历时加上之前`+-k`的个数.
