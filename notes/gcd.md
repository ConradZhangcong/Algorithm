# 求最大公约数

快速求得 aa 和 bb 的最大公约数的主要方式有两种 :「更相减损法」和「欧几里得算法」，其中「欧几里得算法」的递归实现最为好写，复杂度为 O(\log{(a + b)})O(log(a+b))，在绝大多数的情况下适用，只有在需要实现高精度时，才会考虑使用「更相减损法」。

而 stein 算法则是没有必要掌握的。

作者：AC_OIer
链接：https://leetcode-cn.com/problems/simplified-fractions/solution/gong-shui-san-xie-jian-dan-shu-lun-yun-y-wma5/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

```js
/**
 * https://leetcode-cn.com/problems/simplified-fractions/solution/gong-shui-san-xie-jian-dan-shu-lun-yun-y-wma5/
 * 辗转相除法(欧几里得算法) 求最大公约数
 * @param {number} a
 * @param {number} b
 * @returns 两个数的最大公约数
 */
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
```
