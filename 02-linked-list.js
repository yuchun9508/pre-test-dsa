// 使用 Linked List 實作 Stack
// 實作需包含以下方法。
// push() : 添加新元素。
// pop():移除元素並返回被移除的元素。
// size():返回所有元素數量。
// const myStack = new Stack()
// myStack.push(1)
// myStack.push(2)
// myStack.push(3)
// myStack.pop() // 3
// myStack.size() // 2

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = { value }; // { value: 2 }
    node.next = this.head;  // node => { value: 2, next: { value: 1, next: null } }
    this.head = node; // head => { value: 2, next: { value: 1, next: null } }
    this.length++;
  }

  pop() {
    const popped = this.head.value;
    this.head = this.head.next;
    this.length--;
    return popped;
  }

  size() {
    return this.length;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack.size());
