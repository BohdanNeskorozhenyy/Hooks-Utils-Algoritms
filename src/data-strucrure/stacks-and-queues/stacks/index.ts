class Node<T> {
	constructor(
        public val: T,
        public next: Node<T> | null = null,
    ) {}
}

class Stack<T> {
    public first: Node<T> | null = null;
    public last: Node<T> | null = null;
    public size = 0;

    constructor(array?: T[]) {
		if (array) {
			this.fromArray(array);
		}
	}

	push(val: T) {
		const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
	}

    pop() {
        if (!this.first) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }

    fromArray(arr: T[]) {
        arr.forEach((item) => {
            this.push(item);
        });
        return this;
    }

    toArray(){
        const arr = [];
        let current = this.first;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

export default Stack;
