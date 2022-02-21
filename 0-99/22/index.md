# 22. 括号生成

链接：https://leetcode-cn.com/problems/generate-parentheses

## 思路

暴力组合所有情况, 循环判断是否优先

## 回溯法

仅当序列合法时继续递归, 当`左边括号<n`时, 可以添加左括号; 当`右边括号<左边括号`时 添加右括号
