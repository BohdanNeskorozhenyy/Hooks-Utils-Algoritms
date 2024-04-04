class Node<T> {
	constructor(
		public val: T,
		public next: Node<T> | null = null,
		public prev: Node<T> | null = null,
	) {}
}

class DoublyLinkedList<T> {
	public head: Node<T> | null = null;
	public tail: Node<T> | null = null;
	public length = 0;

	constructor(array?: T[]) {
		if (array) {
			this.fromArray(array);
		}
	}

	push(val: T) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail!.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		const removedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = removedNode!.prev;
			this.tail!.next = null;
			removedNode!.prev = null;
		}
		this.length--;
		return removedNode;
	}

	shift() {
		if (this.length === 0) return undefined;
		const oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead!.next;
			this.head!.prev = null;
			oldHead!.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val: T) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head!.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index: number) {
		const half = Math.round(this.length / 2);
		if (index < 0 || index >= this.length) return null;
		if (half >= index) {
			let node = this.tail;
			let counter = this.length - 1;
			while (counter !== index) {
				node = node!.prev;
				counter--;
			}
			return node;
		}
		let node = this.head;
		let counter = 0;
		while (counter !== index) {
			node = node!.next;
			counter++;
		}
		return node;
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

		const newNode = new Node(val);
		const beforeNode = this.get(index - 1);
		const afterNode = beforeNode!.next;

		beforeNode!.next = newNode;
		newNode.prev = beforeNode;
		newNode!.next = afterNode;
		afterNode!.prev = newNode;
		this.length++;
		return true;
	}

	remove(index: number) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		const removedNode = this.get(index);
		const beforeNode = removedNode!.prev;
		const afterNode = removedNode!.next;
		beforeNode!.next = afterNode;
		afterNode!.prev = beforeNode;
		removedNode!.next = null;
		removedNode!.prev = null;
		this.length--;
		return removedNode;
	}

	fromArray(arr: T[]) {
		arr.forEach((item) => {
			this.push(item);
		});
		return this;
	}

	toArray() {
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}
		return arr;
	}
}

export default DoublyLinkedList;
