# 所有奇数长度子数组的和

链接：https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays

## 思路 1

暴力破解

双重循环, 判断数组是否为奇数, 奇数则计算和

时间复杂度 O(n^3)

## 思路 2

前缀和

降低思路 1 的时间复杂度 变为 O(n^2)
