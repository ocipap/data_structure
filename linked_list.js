class Node {
    constructor (value) {
        this.value = value
        this.next = undefined
    }   
}

class LinkedList {
    constructor () {
        var dummy = new Node("dummy")
        this.before = undefined
        this.current = undefined

        this.head = dummy
        this.tail = dummy
        
        this.num_of_data = 0
    }

    append (value) {
        var new_node = new Node(value)
        this.tail.next = new_node
        this.tail = new_node

        this.num_of_data += 1
    }

    delete () {
        let delete_node = this.current.value
        if(this.current == this.tail) {
            this.tail = this.before
        }

        this.before.next = this.current.next
        this.current = this.before

        this.num_of_data -= 1
        return delete_node
    }

    status() {
        console.log('---------STATUS---------')
        console.log(`current : ${this.current.value}`)
        console.log(`head : ${this.head.value}`)
        console.log(`tail : ${this.tail.value}`)
        console.log(`num_of_data : ${this.num_of_data}`)
    }

    print() {
        this.current = this.head.next
        let data = this.current
        if(data) {
            console.log(data.value)
            while (true) {
                data = this.next()
                if(data) {
                    console.log(data.value)
                } else {
                    break
                }
            }
        }
    }

    first() {
        if (this.num_of_data === 0 ){
            return undefined
        }
        this.before = this.head
        this.current = this.head.next

        return this.current.value
    }

    next() {
        if (this.current.next == undefined) {
            return undefined
        }
        this.before = this.current
        this.current = this.current.next
        return this.current
    }
}

var linked_list = new LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.append(4)
linked_list.append(5)
linked_list.append(6)
linked_list.append(7)
linked_list.first()
linked_list.next()
linked_list.next()
linked_list.next()
linked_list.next()
linked_list.next()

linked_list.status()
linked_list.delete()
linked_list.status()

linked_list.print()
