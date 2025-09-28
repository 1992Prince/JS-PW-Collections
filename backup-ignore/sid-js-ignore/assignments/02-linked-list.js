// Node constructor
function Node(val) {
  this.val = val;
  this.next = null;
}

//LinkedList constructor
function LinkedList() {
  this.head = null;
  this.size = 0;
}

// ✅ Adds a new node at the beginning (head) of the list
// [EDGE CASE WILL BE - CHK IF LL IS EMPTY]
LinkedList.prototype.addAtHead = function (val) {
  // let newNode = new Node(val);
  // if (this.head === null) {
  //   // THIS IS EDGE CASE
  //   this.head = newNode;
  // } else {
  //   newNode = this.head;
  //   this.head = newNode;
  // }
  // this.size++;
  let newNode = new Node(val);
  newNode.next = this.head; // Even if head is null, this works
  this.head = newNode;
  this.size++;
};

// ✅ Adds a node at the end (tail) of the list
// [EDGE CASES] => 1) If LL IS EMPTY 2)
LinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    // we need to reach till last node of LL
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    // now you are at last node of LL => update the lastNode next
    current.next = newNode;
  }
  this.size++;
};

// ✅ Adds a node at a specific index in the list
// [EDGE CASES] - ADDING NODE AT FIRST NODE
LinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    // INVALID CASE AND RETURNING UNDEFINED
    return;
  }

  let newNode = new Node(val);
  if (index === 0) {
    this.addAtHead(val); // THIS FUN WILL CHECK IF LL IS EMPTY OR NOT
    return;
  } else if (index === this.size) {
    this.addToTail(val);
    return;
  } else {
    let current = this.head;
    // we know index where we want to add new node,
    // we need to reach before its one index and we can use for loop
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }
  this.size++;
};

// ✅ Returns the value at a specific index
LinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size || this.head === null) {
    // INVALID CASE AND RETURNING UNDEFINED
    return -1;
  }

  // if (index === 0) {
  //   return this.head.val;
  // } else {
  //   let current = this.head;
  //   for (let i = 0; i < index; i++) {
  //     current = current.next;
  //   }
  //   return current.val;
  // }

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

// ✅ Deletes a node at a specific index
LinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size || this.head === null) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current.next = current.next.next;
    }
    this.size--;
  }
};

/**
 * Avoid using current.next !== null bcoz , for last node it will not let u print its value
 * of let u perform any action
 */

// ✅ Prints the full linked list (for debugging)
LinkedList.prototype.print = function () {
  let current = this.head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

console.log('------------------------------------------------------');

// ✅ Usage Example
let myList = new LinkedList();
myList.addAtHead(10); // [10]
myList.addAtHead(20); // [20 → 10]
myList.addToTail(5); // [20 → 10 → 5]
myList.print();
console.log();

myList.addAtIndex(1, 15); // [20 → 15 → 10 → 5]
myList.print();
console.log();

// // Get values by index
// console.log('myList.get(0) - ', myList.get(0)); // 20
// console.log('myList.get(1) - ', myList.get(1)); // 15
// console.log('myList.get(2) - ', myList.get(2)); // 10
// console.log('myList.get(3) - ', myList.get(3)); // 5
// console.log('myList.get(4) - ', myList.get(4)); // -1 (invalid index)
// console.log();

// Delete node at index 1
myList.deleteAtIndex(1); // [20 → 10 → 5]
myList.print();
