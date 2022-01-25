# 552. 学生出勤记录 II

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/student-attendance-record-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路

使用两个标记判断字符串是否符合条件, 不符合条件直接终止.

- 迟到不能连续超过 3
- 缺勤不能超过 2
