# 301. 删除无效的括号

链接：https://leetcode-cn.com/problems/remove-invalid-parentheses

## 思路

遍历字符串

遍历到左括号时, 左括号数量+1;
遍历到有括号时, 如果左括号数量<0, 右有括号数+1; 如果左括号数>0, 那左括号数-1.

遍历完成后可以得出左右括号需要删除的最少数量.
