class Stack {
  constructor() {
    this.stackArr = []
  }
  push(elm) {
    this.stackArr.push(elm); //向栈中添加一个数据
  }
  pop(elm) {
    return this.stackArr.pop(); //把栈顶的元素移除,并返回栈顶元素
  }
  peek() {
    return this.stackArr[this.stackArr.length - 1]; //返回栈顶元素但是不会移除栈顶元素
  }
  size() {
    return this.stackArr.length; // 返回栈的大小
  }
  clear() {
    this.stackArr = []; // 清空栈
  }
}

var stack = new Stack();

stack.push(1)
stack.push(3)

console.log(stack.peek()); //3
console.log(stack.size()); //2
console.log(stack.pop()); //3
console.log(stack.size()); //1

console.log('--------------------');
// 1.可以将数字转化为二至九进制的数字
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base) //把第一个余数放入栈中
    num = Math.floor(num / base); //拿到接下来需要计算的值
  } while (num > 0);
  var result = "";
  while (s.size() > 0) {
    result += s.pop()
  }
  return result;
}
console.log(mulBase(5, 2));

//2.使用栈的思路检查字符串是否是回文

function isPalindrome(word) {
  var s = new Stack();
  for (let i = 0; i < word.length; i++) {
    s.push(word[i])
  }
  var result = "";
  while (s.size() > 0) {
    result += s.pop();
  }
  // console.log(result);
  // console.log(word);
  return result == word
}
console.log(isPalindrome('101'));
console.log(isPalindrome('abc'));

function isDouuble(str) {
  const stack = new Stack();
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const item = str[i];
    if (item === "(") {
      stack.push(item); // 入栈
    } else if (item === ")") {
      if (stack.size() === 0) {
        return false;
      } else {
        stack.pop(); // 出栈
      }
    }
  }
  return stack.size() === 0;
}

var str = "(([]()[])[])";
var stack = [];
for (let i = 0; i < str.length; i++) {
  var item = str[i]
  if (item == '(' || item == '[') {
    stack.push(item)
  } else {
    var lastItem = stack[stack.length - 1]
    if (countNum(item) + countNum(lastItem) == 0) {
      console.log(lastItem + item);
      stack.pop(); //抵消之后需要把队列中的删除
    } else {
      stack.push(item)
    }
  }
}
//为了方便匹配每个字符，将字符用数字表示
function countNum(chr) {
  switch (chr) {
    case '(':
      return 1;
      break;
    case ')':
      return -1;
      break;
    case '[':
      return 2;
      break;
    case ']':
      return -2;
      break;
    default:
      return 0;
  }
}