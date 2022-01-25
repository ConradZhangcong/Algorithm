# 数据流的中位数

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-median-from-data-stream
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路

使用数组存储数据, 中位数分奇偶两种情况看, 奇数取中间的, 偶数取中间两项的平均数.

插入时需要进行排序, 这边使用二分插入.
