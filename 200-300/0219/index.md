# 219. 存在重复元素 II

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路

双重遍历判断是否有相等的值, 根据题意可以优化第二个循环的边界, `Math.min(i + k + 1, nums.length)`.

也可以使用`Set`判断是否已经有重复的值.
