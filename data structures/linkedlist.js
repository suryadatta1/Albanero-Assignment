var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        console.log(slow)
        fast = fast.next.next;
        console.log(fast)
    }
    return slow;
};
console.log(middleNode([1,2,3,4,5,6]))