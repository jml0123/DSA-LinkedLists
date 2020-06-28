// MYSTERY PROGRAM
// This checks the linkedlist if the new node's next node is the value of the current node
// if that node is the value of the current node, this function reassignss that node to the following node, instead of the current node's value
// O(n^2)

const LinkedList = require("./LinkedListNew")
const {display, size, findLast, findPrevious, isEmpty} = require("./Helpers")

const initiateTestList = () => {
    const SLL = new LinkedList()
    const itemsToAdd = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"]
    for (item of itemsToAdd) {
        SLL.insertLast(item)
    }
}
initiateTestList()

// Reverse List
const reverseListIterative = (list) => {
    const prevNode = list.head
    const currNode = list.head
    const nextNode = list.head
    if (currNode === null) {
        console.log("List is empty")
        return
    }
    while (currNode !== null) {
        nextNode = currNode.next
        currNode.next = prevNode
        prevNode = currNode
        currNode = nextNode
    }
    if (currNode === null) {
        return
    }
}

// Get 3rd from end
const get3rdfromEnd = (list) => {
    const currNode = list.head
    if (currNode === null) {
        console.log("List is empty")
        return
    }
    // Get length of LinkedList
    let length = size(list)
    if (length < 3) {
        return 
    }

    currNode = list.head
    for (let i = 1; i < length - 3 + 1; i++) { // Iterate up to the 3rd from last node
        currNode = currNode.next
    }
    console.log(currNode)
    return
}

// Get Middle
const getMiddle = (list) => {
    const currNode = list.head
    if (currNode === null) {
        console.log("List is empty")
        return
    }
    // Get length of LinkedList
    let length = size(list)
 
    currNode = list.head
    for (let i = 1; i < Math.floor(length / 2) + 1; i++) { // Iterate up to the 3rd from last node
        currNode = currNode.next
    }
    console.log(currNode)
    return
}

// Cycle
const cycle = (list) => {
    const slow = this.head
    const fast = this.head
    if (currNode === null) {
        console.log("List is empty")
        return
    }

    while(true) {
        slow = slow.next
        if(fast.next != null) {
            fast = fast.next.next
        }
        else return false
        if (fast === null) {
            return false
        }
        if(slow === fast || slow.next === fast) 
            return true
    }
}

// Sort??? Need to redo
const sort = (list) =>{
    const currNode = list.head
    if (currNode === null || currNode.next === null) {
        return currNode
    }
    const middle = getMiddle(list)
    const nextToMiddle = middle.next;
    middle.next = null

    const left = sort(currNode)
    const right = sort(nextToMiddle)
    return merge(left, right)
}   

const merge = (list1, list2) => {
    let current = list.head;
   
    while (list1 !== null && list2 !== null) {
        if (list1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        
        current = current.next;
    }

    current.next = (l1 === null) ? l2 : l1;
    
    return head.next;
}

