function Node(val, next) {
  this.val = val || null;
  this.next = next || null;
}

function FrontMiddleBackQueue() {
  this.val = null;
  this.next = null;
  this.length = 0;
}

FrontMiddleBackQueue.prototype.pushFront = function (val) {
  if (this.val === null) {
    this.val = val;
    this.length++;
    return;
  }

  const length = this.length;
  const current = new Node(val);
  const _this = new Node(this.val);
  const next = this.next;
  this.val = current.val;
  _this.next = next;
  this.next = _this;
  this.length = length + 1;
};

FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (this.val === null) {
    this.val = val;
    this.length++;
    return;
  }

  if (this.length === 1) {
    const _this = new Node(this.val);
    this.next = _this;
    this.val = val;
    this.length++;
    return;
  }

  // [1, 4, 3, 2]
  const insertPos = this.length >> 1; // 中间位置
  let index = 0;
  let n = this;
  while (insertPos - 1 >= index) {
    if (insertPos - 1 === index) {
      const current = new Node(val);
      const next = n.next;
      n.next = current;
      current.next = next;
    } else {
      n = n.next;
    }
    index++;
  }
  this.length++;
};

FrontMiddleBackQueue.prototype.pushBack = function (val) {
  if (this.val === null) {
    this.val = val;
    this.length++;
    return;
  }

  this.length++;

  const current = new Node(val);
  let n = this;
  while (n) {
    if (n.next) {
      n = n.next;
    } else {
      n.next = current;
      return;
    }
  }
};

FrontMiddleBackQueue.prototype.popFront = function () {
  if (this.val === null) {
    return -1;
  }

  if (this.length === 1) {
    const val = this.val;
    this.val = null;
    this.next = null;
    this.length = 0;
    return val;
  }

  const result = this.val;
  const length = this.length;

  this.val = this.next.val;
  this.next = this.next.next;
  this.length = length - 1;

  return result;
};

FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (this.val === null) {
    return -1;
  }

  if (this.length === 1) {
    const val = this.val;
    this.val = null;
    this.next = null;
    this.length = 0;
    return val;
  }

  if (this.length === 2) {
    return this.popFront();
  }

  const length = this.length;
  const delPos = length % 2 === 0 ? (length >> 1) - 1 : length >> 1;

  let index = 0;
  let result;
  let n = this;

  while (index <= delPos - 1) {
    if (index === delPos - 1) {
      result = n.next.val;
      n.next = n.next.next;
    } else {
      n = n.next;
    }
    index++;
  }

  this.length--;

  return result;
};

FrontMiddleBackQueue.prototype.popBack = function () {
  if (this.val === null) {
    return -1;
  }

  if (this.length === 1) {
    const result = this.val;
    this.val = null;
    this.next = null;
    this.length = 0;
    return result;
  }

  const length = this.length;

  let index = 0;
  let result;
  let n = this;
  while (index <= length - 2) {
    if (index === length - 2) {
      result = n.next.val;
      n.next = null;
    } else {
      n = n.next;
    }
    index++;
  }

  this.length = length - 1;

  return result;
};

const que = new FrontMiddleBackQueue();
que.pushMiddle(1);
que.pushMiddle(2);
que.pushMiddle(3);
console.log(que);
console.log(que.popMiddle()); // 1
console.log(que.popMiddle()); // 2
console.log(que.popMiddle()); // 3
