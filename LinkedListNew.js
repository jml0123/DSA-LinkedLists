const _Node = require('./Node') 


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



class LinkedList {
    constructor() {
        this.head = null
    }
    // insert first
    insertFirst(val) {
        this.head = new _Node(val, this.head)
    }
    // insert last
    insertLast(val) {
        if(this.head === null) {
            this.insertFirst(val)
        }
        else {
            let currNode = this.head
            while(currNode.next !== null) {
                currNode = currNode.next;
            }
            currNode.next = new _Node(val, null)
        }
    }
    // find
    find(val){
        let currNode = this.head
        if (!this.head) {
            return null
        }
        while (currNode.value !== val) { // while the current node doesn't equal item
            if (currNode.next === null) {
                return null // it's the last item, and the item wasn't found
            }
            else {
                currNode = currNode.next
            }
        }
        return currNode
    }
    //remove
    remove(val) {
        if(!this.head) {
            return null
        }
        if (this.head.value === val) {
            this.head = this.head.next // remove the head and assign the head to the next node
            return
        }
        let prevNode = this.head;
        let currNode = this.head

        while ((currNode !== null) && (currNode.value !== val)) { // Keep traversing until we find a match
            prevNode = currNode
            currNode = currNode.next; 
        }
        if (currNode === null) {
            console.log("Value not found")
            return;
        }
        prevNode.next = currNode.next;
    }
    insertBefore(val, node) {
        let currNode = this.head
        let prevNode = this.head;
        if (!this.head) {
            return null
        }
        if (this.head === node) {
            this.head.next = this.head  
            this.head = new _Node(val, this.head);
            return
        }

        while ((currNode !== null) && (currNode.value !== node)) { // Keep traversing until we find a match
            prevNode = currNode
            currNode = currNode.next; 
        }
        if (currNode === null) {
            console.log("Cannot find node with specified key")
            return;
        }
        const newNode = new _Node(val, currNode)
        prevNode.next = newNode;    
    }
    insertAfter(val, node) {
        let currNode = this.head
        let prevNode = this.head;
        if (!this.head) {
            return null
        }
        if (this.head === node) {
            this.head.next = new _Node(val, this.head.next);
            return
        }

        while ((currNode !== null) && (currNode.value !== node)) { // Keep traversing until we find a match
            prevNode = currNode
            currNode = currNode.next; 
        }
        if (currNode === null) {
            console.log("Cannot find node with specified key")
            return;
        }
        const newNode = new _Node(val, currNode.next)
        currNode.next = newNode;
    }
    insertAt(val, position) {
        let currNode = this.head
        let prevNode = this.head;
        let currPos = 0;
        if (!this.head) {
            return null
        }
        if (currPos === position) {
            this.head = new _Node(val, this.head);
            return
        }
        while ((currNode !== null) && (currPos !== position)) { // Keep traversing until we find a match
            currPos++;
            prevNode = currNode
            currNode = currNode.next; 
        }
        if (currNode === null) {
            console.log("Cannot find specified position")
            return;
        }
        currNode = new _Node(val, currNode.next)
        prevNode = currNode;
    }
}

const main = () => {
    const SLL = new LinkedList()
    const itemsToAdd = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"]
    for (item of itemsToAdd) {
        SLL.insertLast(item)
    }
    // The first value is O(1), the rest is O(n)
    SLL.insertLast("Tauhida") // O(n)
    SLL.remove("Husker") // O(n)
    SLL.insertBefore("Athena", "Boomer") // O(n)
    SLL.insertAfter("Hotdog", "Helo") // O(n)
    SLL.insertAt("Kat", 3) // O(n)
    SLL.remove("Tauhida") // O(n)
    display(SLL)
}

main()

module.exports = LinkedList