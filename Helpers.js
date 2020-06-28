
// O(n)
const display = (LinkedList) =>{
    let currNode = LinkedList.head
    if (LinkedList.head === null) {
        console.log("List is empty")
        return
    }
    console.log("Nodes")
    while(currNode !== null) {
        console.log(currNode)
        currNode = currNode.next;
    }
}

// O(n)
const size = (LinkedList) =>{
    let currNode = LinkedList.head
    let size = 0;
    if (LinkedList.head === null) {
        console.log("List is empty")
        return
    }
    while(currNode !== null) {
        size++
    }
    return size
}

// O(n)
const isEmpty = (LinkedList) =>{
    let currNode = LinkedList.head
    if (LinkedList.head === null) {
        return true
    }
    return false
}

// O(n)
const findPrevious = (node) =>{
    let currNode = LinkedList.head
    let prevNode = LinkedList.head
    if (LinkedList.head === null) {
        console.log("List is empty")
        return
    }
    while((currNode !== node) && (currNode !== null)) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log("Cannot find specified node")
        return
    }
    return prevNode
}

// O(n)
const findLast = (node) =>{
    let currNode = LinkedList.head
    let prevNode = LinkedList.head;
    if (LinkedList.head === null) {
        console.log("List is empty")
        return
    }
    while((currNode !== null)) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    return prevNode
}


module.exports = {display, size, findLast, findPrevious, isEmpty}