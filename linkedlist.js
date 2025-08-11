function LinkedList() {
  //create head reference
  //the initial reference is null because it does not have any node to point to yet
  let head = null;

  //adds a new node containing value to the end of the list
  //which means create a new node, then let the last node refers to it
  function append(value) {
    //if list is empty
    if (head === null) {
      head = NewNode(value, null);
    } else {
      //tranverse the list and find the last node
      let transverseCurrent = head;
      while (transverseCurrent.nextNode !== null) {
        transverseCurrent = transverseCurrent.nextNode;
      }
      transverseCurrent.nextNode = NewNode(value, null);
    }
  }

  function prepend(value) {
    //if list is empty
    if (head === null) {
      head = NewNode(value, null);
    } else {
      //change the head reference to the new node
      //the new node should have a reference to the original first node
      let firstNode = head; //store reference to original first node
      head = NewNode(value, firstNode); //create new node with next node ref as the original first node and make it the new ref for head
    }
  }

  function size() {
    let totalNos = 0;
    if (head === null) {
      totalNos = 0;
    } else {
      let transverseCurrent = head;
      totalNos += 1;
      while (transverseCurrent.nextNode !== null) {
        transverseCurrent = transverseCurrent.nextNode;
        totalNos += 1;
      }
    }
    return totalNos;
  }

  function getHead() {
    return head;
  }

  function getTail() {
    if (head === null) {
      return head;
    } else {
      let transverseCurrent = head;
      while (transverseCurrent.nextNode !== null) {
        transverseCurrent = transverseCurrent.nextNode;
      }
      return transverseCurrent;
    }
  }

  function at(index) {
    let indexCounter = 0;
    if (head === null) {
      throw new Error("List is empty");
    } else {
      let transverseCurrent = head;
      while (indexCounter <= index) {
        if (indexCounter === index) {
          return transverseCurrent;
        } else {
          indexCounter += 1;
          transverseCurrent = transverseCurrent.nextNode;
        }
      }
    }
  }

  function pop() {
    if (head === null) {
      throw new Error("List is empty");
    } else {
      let transverseCurrent = head;
      let transversePrevious;
      while (transverseCurrent.nextNode !== null) {
        transversePrevious = transverseCurrent;
        transverseCurrent = transverseCurrent.nextNode;
      }
      transversePrevious.nextNode = null;
    }
  }

  function contains(value) {
    if (head === null) {
      throw new Error("List is empty");
    } else {
      let transverseCurrent = head;
      let containsBool = false;
      while (transverseCurrent.nextNode !== null) {
        if (
          transverseCurrent.value === value ||
          transverseCurrent.nextNode.value === value
        ) {
          containsBool = true;
          return containsBool;
        } else {
          transverseCurrent = transverseCurrent.nextNode;
        }
      }
      return containsBool;
    }
  }

  function find(value) {
    if (head === null) {
      return null;
    } else {
      let transverseCurrent = head;
      let index = 0;
      while (transverseCurrent.nextNode !== null) {
        if (transverseCurrent.value === value) {
          return index;
        } else if (transverseCurrent.nextNode.value === value) {
          index += 1;
          return index;
        } else {
          transverseCurrent = transverseCurrent.nextNode;
          index += 1;
        }
      }
      return null;
    }
  }

  function toString() {
    if (head === null) {
      return "null";
    } else {
      let transverseCurrent = head;
      let string = "";
      while (transverseCurrent !== null) {
        string += `( ${transverseCurrent.value} ) -> `;
        if (transverseCurrent.nextNode === null) {
          string += "null";
          return string;
        }
        transverseCurrent = transverseCurrent.nextNode;
      }
    }
  }

  function insertAt(value, index) {
    let indexCounter = 0;
    if (head === null && index > 0) {
      throw new Error("List does not exist");
    } else {
      let transverseCurrent = head;
      let transversePrevious;
      while (indexCounter <= index) {
        if (indexCounter === index) {
          if (index === 0) {
            head = NewNode(value, transverseCurrent);
            break;
          } else {
            transversePrevious.nextNode = NewNode(value, transverseCurrent);
            break;
          }
        } else {
          indexCounter += 1;
          transversePrevious = transverseCurrent;
          transverseCurrent = transverseCurrent.nextNode;
        }
      }
    }
  }

  function removeAt(index) {
    let indexCounter = 0;
    if (head === null && index > 0) {
      throw new Error("List does not exist");
    } else {
      let transverseCurrent = head;
      let transversePrevious;
      while (indexCounter <= index) {
        if (indexCounter === index) {
          if (index === 0) {
            head = transverseCurrent.nextNode;
            break;
          } else {
            transversePrevious.nextNode = transverseCurrent.nextNode;
            break;
          }
        } else {
          indexCounter += 1;
          transversePrevious = transverseCurrent;
          transverseCurrent = transverseCurrent.nextNode;
        }
      }
    }
  }

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

function NewNode(valueInput, nextNodeRef) {
  nodeObj = {
    value: null || valueInput,
    nextNode: null || nextNodeRef,
  };

  return nodeObj;
}

const list = LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");
// list.prepend("fucker");
// list.prepend("fuck you");
// list.pop();
// list.insertAt("hi", 1);
// list.removeAt(7);

// console.log(list.toString());
// console.log(list.size());
// console.log(list.getHead());
// console.log(list.getTail());
// console.log(list.at(6));
// console.log(list.contains("hamster"));
// console.log(list.contains("ham"));
// console.log(list.find("hamster"));

list.append(2);
list.prepend(1);
list.prepend(0);
list.append(3);
list.append(4);
list.append(5);
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(1));
list.pop();
console.log(list.size());
console.log(list.contains(4));
console.log(list.find(4));
console.log(list.toString());
list.insertAt("insert", 3);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());
