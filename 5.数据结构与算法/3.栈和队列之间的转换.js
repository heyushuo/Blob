class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  initStack() {
    var length1 = this.stack1.length;
    var length2 = this.stack2.length;
    if (length1 == 0 && length2 == 0) {
      //此时两个栈都是空的了
      return "";
    }
    //如果stack2是空的
    if (length2 == 0) {
      // 需要把stack1压栈到stack2中
      while (this.stack1.length != 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
  }
  // 向队尾添加一个元素
  enqueue(item) {
    this.stack1.push(item); // 把数据存入到stack1中
  }
  // 删除队首的一个元素
  dequeue() {
    //删除的先把stack1中的数据添加到stack2中
    this.initStack();
    return this.stack2.pop();
  }
}

var que = new Queue();
que.enqueue('a')
que.enqueue('b')
que.enqueue('c')
console.log(que); //Queue { stack1: [ 'a', 'b', 'c' ], stack2: [] }
que.dequeue()
console.log(que); //Queue { stack1: [], stack2: [ 'c', 'b' ] }

class Stack {
  constructor() {
    //创建两个队列
    this.queue1 = [];
    this.queue2 = [];
  }
  initQueue() {
    //如果为空
    if (!this.queue2.length) {
      //把queue1中的放到queue2中最后只保留一个
      while (this.queue1.length != 1) {
        this.queue2.push(this.queue1.shift());
      }
      //然后再把队列2中的元素全部放回到1中
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
    }
  }
  push(item) {
    this.queue1.push(item);
  }
  pop() {
    this.initQueue();
    this.queue1.shift();
  }
}

var stac = new Stack();
stac.push('a')
stac.push('b')
stac.push('c')
console.log(stac); //Stack { queue1: [ 'a', 'b', 'c' ], queue2: [] }
stac.pop()
console.log(stac); //Stack { queue1: [ 'a', 'b' ], queue2: [] }