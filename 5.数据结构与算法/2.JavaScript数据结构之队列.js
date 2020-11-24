class Queue {
  constructor(items) {
    this.items = items || [];
  }
  enqueue(element) {
    this.items.push(element); //从队尾添加一个元素
  }
  dequeue() {
    return this.items.shift(); //从队首删除一个元素
  }
  head() {
    return this.items[0]; //返回队首的元素
  }
  tail() {
    return this.items[this.items.length - 1]; //返回队尾的元素
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return !this.items.length;
  }
}

var queue = new Queue();
//从队尾添加一个元素
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
// 返回队尾的元素
console.log(queue.head()); //队首1
console.log(queue.tail()); // 队尾3
//从队列首删除元素
queue.dequeue();
console.log(queue.head()); //队首2
console.log(queue.tail()); // 队尾3
// 1.有一个数组存放了 100 个数据 0-99，要求每隔两个数删除一个数，到末尾时再循环至开头继续进行，求最后一个被删除的数字。(约瑟夫环问题).
//创建一个0-99的数组
var arr = Array.from({ length: 100 }, (v, index) => index);
var arr = [0, 1, 2, 3];
function find(arr) {
  var queue = new Queue(); //创建爱你一个队列
  var index = 0;
  for (let i = 0; i < arr.length; i++) {
    queue.enqueue(i); //将数据入队
  }
  while (queue.size() !== 1) {
    var item = queue.dequeue(); //出队一个元素,根据index%3==0,来决定是否要放到队列的尾部
    index = index + 1;
    if (index % 3 != 0) {
      //需要放到队列尾部,下次循环可以达到从头开始的效果
      queue.enqueue(item);
    }
    console.log(queue);
  }
  return queue.head();
}
console.log("最后一个被删除的数字是" + find(arr));

function add(n) {
  var queue = []; //创建一个队列
  queue.push(1); //先把第一个放进去
  //这层循环控制有多少行
  for (let i = 1; i <= n; i++) {
    var row = "";
    var start = 0; //加的基数从0开始
    //控制当前行的数据
    for (let j = 0; j < i; j++) {
      var item = queue.shift();
      var value = start + item; //当前数据的值
      start = item; //
      row = row + item + " ";
      queue.push(value);
    }
    queue.push(1); // 将每层的最后一个数值 1 存入队列中
    console.log(row);
  }
}
add(5);


var node9 = {
  num: 'M',
  children: []
};             //节点7
var node8 = {
  num: 'B',
  children: []
};
var node7 = {
  num: 'G',
  children: [node9]
};             //节点7
var node6 = {
  num: 'H',
  children: []
};
var node5 = {
  num: 'D',
  children: [node8]
};
var node4 = {
  num: 'A',
  children: []
};
var node3 = {
  num: 'E',
  children: [node6, node7]
};
var node2 = {
  num: 'C',
  children: [node4, node5]
};
var node1 = {
  num: 'F',
  children: [node2, node3]
};

var queue = [];      //队列
queue.push(node1);//现将第一个节点push进去
var i =0;
while (i<queue.length) {
var node = queue[i];
console.log(node.num);
if(node.children.length!==0){
  for (let j = 0; j < node.children.length; j++) {
     queue.push(node.children[j]);
  }
}
i++
}
