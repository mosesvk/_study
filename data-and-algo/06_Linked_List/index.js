class ListNode {
    constructor(val, nextNode = null) {
        this.val = val
        this.next = nextNode
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(-1)
        this.tail = this.head
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let cur = this.head.next 
        let i = 0

        while (cur) {
            if (i === index) return cur.val
            i++
            cur = cur.next 
        }

        return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new ListNode(val)

        newNode.next = this.head.next 
        this.head.next = newNode 

        if (!newNode.next) this.tail = newNode
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.tail.next = new ListNode(val)
        this.tail = this.tail.next 
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let cur = this.head
        let i = 0 

        while (i < index && cur) {
            i++
            cur = cur.next
        }

        if (cur && cur.next) {
            if (cur.next === null) this.tail = cur

            cur.next = cur.next.next

            return true
        }

        return false
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = []

        let cur = this.head.next

        while (cur) {
            res.push(cur.val)

            cur = cur.next 
        }

        return res
    }
}


// ["insertTail", 1, "insertTail", 2, "get", 1, "remove", 1, "insertTail", 2, "get", 1, "get", 0]
const list = new LinkedList()
list.insertHead(1)
list.insertHead(2)
list.insertHead(3)
console.log(list.getValues())
console.log(list.get(1))
console.log(list.remove(1))
console.log(list.getValues())