class DoublyListNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new DoublyListNode(-1)
        this.tail = new DoublyListNode(-1)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    insertFront(val) {
        const newNode = new DoublyListNode(val)
        newNode.prev = this.head
        newNode.next = this.head.next

        this.head.next.prev = newNode
        this.head.next = newNode
    }

    insertEnd(val) {
        const newNode = new DoublyListNode(val)
        newNode.next = this.tail
        newNode.prev = this.tail.prev

        this.tail.prev.next = newNode
        this.tail.prev = newNode
    }

    removeFront() {
        this.head.next.next.prev = this.head
        this.head.next = this.head.next.next 
    }

    removeEnd() {
        this.tail.prev.prev.next = this.tail
        this.tail.prev = this.tail.prev.prev
    }

    print() {
        let cur = this.head.next
        let s = ''
        while (cur !== this.tail) {
            s += cur.val + '-->'
            cur = cur.next
        }
        console.log(s)
    }
}

const dbList = new DoublyLinkedList()

dbList.insertEnd('B')
dbList.insertFront('A')
dbList.removeFront()
dbList.insertFront('F')
dbList.print()