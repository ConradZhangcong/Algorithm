# 压缩字符串

链接：https://leetcode-cn.com/problems/string-compression

## 思路

循环字符串数组, 读指针每次往后走一步, 写指针在遇到当前位置与读指针的值不同时往后走一步, 并且将重复个数写到数组中.
