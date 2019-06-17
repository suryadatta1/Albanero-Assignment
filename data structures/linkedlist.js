// var middleNode = function(head) {
//     slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         console.log(slow)
//         fast = fast.next.next;
//         console.log(fast)
//     }
//     return slow;
// };
// console.log(middleNode([1,2,3,4,5,6]))

function Node(data, next) {
    this.data = data;
    this.next = next;
  }    
  
  // setup some nodes and connect them to each other
  // the linked list looks like:
  // (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
  var n1 = new Node("1", null);   
  var n2 = new Node("2", n1); 
  var n3 = new Node("3", n2); 
  var n4 = new Node("4", n3); 
  var n5 = new Node("5", n4);
  var n6 = new Node("6" ,n5); 

  
  // assign a node to the head which functions
  // as the entry into our linked list
  var head = n6; 
  
  // setup pointers to both start
  // at the head of the linked list
  var fastPointer = head;
  var slowPointer = head;
  
  // loop through the linked list
  // when fastPointer reaches the end of the list
  // then slowPointer will be at the middle node
  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    fastPointer = fastPointer.next.next;   
    slowPointer = slowPointer.next;
  }
  
  // slowPointer is now at the middle node in the linked list
 console.log (slowPointer.data)  