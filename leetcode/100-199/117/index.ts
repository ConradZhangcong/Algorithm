interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
}

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root: Node | null): Node | null => {
  if (root === null) return root;

  let queue = [root];
  while (queue.length > 0) {
    const cur = [...queue];
    queue = [];
    for (let i = 0; i < cur.length; i++) {
      if (cur[i + 1]) {
        cur[i].next = cur[i + 1];
      } else {
        cur[i].next = null;
      }
      if (cur[i].left) queue.push(cur[i].left);
      if (cur[i].right) queue.push(cur[i].right);
    }
  }

  return root;
};
