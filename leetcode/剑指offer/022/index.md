# 剑指 Offer 22. 链表中倒数第 k 个节点

链接：https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof

## 思路 1

两次循环, 第一次求出链表长度, 第二次找到`length-k`位置的结点

## 思路 2

快慢指针, 快指针先走`k`步, 快慢指针在一起走, 快指针走到最后一个结点时, 慢指针位置即为所求.
