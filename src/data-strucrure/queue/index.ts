class Node<T> {
    constructor(
        public val: T,
        public next: Node<T> | null = null,
    ) {}
}

class Queue<T> {
    public first: Node<T> | null = null;
    public last: Node<T> | null = null;
    public size = 0;

    constructor(arr?: T[]) {
        if (arr) {
            this.fromArray(arr);
        }
    }

    enqueue(val: T) {
        const node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last!.next = node;
            this.last = node;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        const removedNode = this.first;
        if (this.first === this.last) {
            this.first = null;
        }
        this.first = this.first?.next || null;
        this.size--;
        return removedNode.val;
    }

    peek() {
        if (!this.first) return null;
        return this.first.val;
    }

    fromArray(arr: T[]) {
        arr.forEach((el) => this.enqueue(el));
    }

    toArray() {
        const result = [];
        let cur = this.first;
        while (cur) {
            result.push(cur.val);
            cur = cur.next;
        }
        return result;
    }
}

export default Queue;
