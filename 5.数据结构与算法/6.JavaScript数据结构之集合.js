class Set {
  constructor() {
    this.items = {};
  }
  add(value) {
    // 向集合中添加元素
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  delete(value) {
    // 从集合中删除对应的元素
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  has(value) {
    // 判断给定的元素在集合中是否存在
    return this.items.hasOwnProperty(value);
  }
  clear() {
    // 清空集合内容
    this.items = {};
  }
  size() {
    // 获取集合的长度
    return Object.keys(this.items).length;
  }
  values() {
    // 返回集合中所有元素的内容
    return Object.values(this.items);
  }
}
let set = new Set();
set.add("a");
set.add("b");
set.add("b");
set.add("b");
set.add("a");
console.log(set.values()); // ['a', 'b']
console.log(set.has("b")); // true
console.log(set.size()); // 2
set.delete("a");
console.log(set.values()); // [ b ]