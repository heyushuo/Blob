class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    var currNode = this.head;
    //从起点开始迭代列表直到找到元素
    while (!(currNode.next == null) && currNode.data != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    var newNode = new Node(newElement);
    //找到需要插入节点的位置
    var current = this.find(item);
    //把新节点的next指向(`current.next`这个是下一个节点)
    newNode.next = current.next;
    //然后再把current.next指向新的节点
    current.next = newNode;
  }

  findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && currNode.next.data != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    //找到待删除节点前面的节点
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      //把前一个的节点,指向要删除节点的下一个节点
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
      console.log(currNode.next.data);
      currNode = currNode.next;
    }
  }
}

var cities = new LList();

cities.insert("kebi", "head");
cities.insert("yaoming", "kebi");
cities.insert("heyushuo", "yaoming");
cities.display() //kebi yaoming heyushuo
console.log('-----------');
cities.insert("aaa", "yaoming");
cities.display() //kebi yaoming aaa heyushuo
cities.remove("aaa");
console.log('-----------');
cities.display() //kebi yaoming heyushuo