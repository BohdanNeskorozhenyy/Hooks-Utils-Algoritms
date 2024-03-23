class _Node<T> {
    constructor(
        public val: T, 
        public next: _Node<T> | null = null
    ){}
}
class SinglyLinkedList<T> {
    constructor(
        public length: number,
        public head: _Node<T> | null,
        public tail: _Node<T> | null
    ){}

    push(val: T) {
        this.length++;
        const node = new _Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }
        return this;
    }

    pop() {
        if (!this.length) return undefined;
        let current = this.head;
        let newTail = current;
        while(current!.next) {
            newTail = current;
            current = current!.next;
        }
        this.tail = newTail;
        this.tail!.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        this.length--;
        const current = this.head;
        this.head = current.next;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(value: T) {
        const newNode = new _Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++
        }
        return this;
    }

    get(index: number) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current!.next;
            counter++;
        }
        return current;
    }

    set(index: number, val: T) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index: number, val: T) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        const newNode = new _Node(val)
        const prevNode = this.get(index - 1);
        const prevNext = prevNode!.next;
        prevNode!.next = newNode;
        newNode.next = prevNext;
        this.length++;
        return true;
    }

    remove(index: number) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();
        const prevNode = this.get(index - 1);
        const removedNode = prevNode!.next;
        prevNode!.next = removedNode!.next;
        this.length--;
        return removedNode;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node!.next;
            node!.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
};