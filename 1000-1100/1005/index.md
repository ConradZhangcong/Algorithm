# K 次取反后最大化的数组和

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 思路 1

排序, 排序完成后遍历数组, 找到其中绝对值最小的值, 然后对负数进行取反, 如果最终取反次数剩余次数为奇数, 则减去两次最小值.

## 思路 2

定义一个 map 存储数组中数字出现的次数.
