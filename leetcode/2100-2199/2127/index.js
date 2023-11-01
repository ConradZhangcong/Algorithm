/**
 *
 * @param {number[]} favorite
 * @return {number}
 */
const maximumInvitations = (favorite) => {
  const n = favorite.length;
  let in_degree = Array(n).fill(0), // 每个节点的入度
    max_length = Array(n).fill(0); // 每个节点的最长链

  for (const x of favorite) {
    in_degree[x]++;
  }
  const d = [];
  for (let i = 0; i < n; i++) {
    if (in_degree[i] === 0) d.push(i);
  }

  // 拓扑排序
  while (d.length > 0) {
    const cur = d.shift();
    const next = favorite[cur];
    max_length[next] = Math.max(max_length[next], max_length[cur] + 1);
    if (--in_degree[next] === 0) d.push(next);
  }

  let ans1 = 0,
    ans2 = 0;
  for (let i = 0; i < n; i++) {
    if (in_degree[i] === 0) continue;
    let j = favorite[i],
      cur = 1;
    while (j !== 1) {
      in_degree[j] = 0;
      j = favorite[j];
      cur++;
    }
    if (cur === 2) ans2 += 2 + max_length[i] + max_length[favorite[i]];
    else ans1 = Math.max(ans1, cur);
  }

  return Math.max(ans1, ans2);
};
