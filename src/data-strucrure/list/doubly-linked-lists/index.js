class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
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
			this.tail = removedNode.prev;
			this.tail.next = null;
			removedNode.prev = null;
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
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}

	unshift(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	get(index) {
		const half = Math.round(this.length / 2);
		if (index < 0 || index >= this.length) return null;
		if (half >= index) {
			let node = this.tail;
			let counter = this.length - 1;
			while (counter !== index) {
				node = node.prev;
				counter--;
			}
			return node;
		}
		let node = this.head;
		let counter = 0;
		while (counter !== index) {
			node = node.next;
			counter++;
		}
		return node;
	}

	set(index, val) {
		const node = this.get(index);
		if (node) {
			node.val = val;
			return true;
		}
		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);

		const newNode = new Node(val);
		const beforeNode = this.get(index - 1);
		const afterNode = beforeNode.next;

		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		this.length++;
		return true;
	}
}

export default DoublyLinkedList;
