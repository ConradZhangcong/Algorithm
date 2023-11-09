function findTheLongestBalancedSubstring(s) {
  let n = s.length, idx = 0, ans = 0;
  while (idx < n) {
    let a = 0, b = 0;
    while (idx < n && s[idx] == '0' && ++a >= 0) idx++;
    while (idx < n && s[idx] == '1' && ++b >= 0) idx++;
    ans = Math.max(ans, Math.min(a, b) * 2);
  }
  return ans;
}
