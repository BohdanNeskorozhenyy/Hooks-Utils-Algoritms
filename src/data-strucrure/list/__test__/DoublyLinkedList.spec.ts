import DoublyLinkedList from '../doubly-linked-list';

let linkedList: DoublyLinkedList<number>;

describe('DoublyLinkedList', () => {
	beforeEach(() => {
		linkedList = new DoublyLinkedList([1, 2, 3]);
	});

	it('shoud push a value correctly', () => {
		linkedList.push(4);
		linkedList.push(5);
		expect(linkedList.head?.val).toBe(1);
		expect(linkedList.tail?.val).toBe(5);
		expect(linkedList.length).toBe(5);
	});

	it('shoud link a value correctly', () => {
		expect(linkedList.head?.next?.val).toBe(2);
		expect(linkedList.tail?.prev?.val).toBe(2);
		expect(linkedList.length).toBe(3);
	});

	it('shoud pop a value correctly', () => {
		expect(linkedList.pop()?.val).toBe(3);
		expect(linkedList.length).toBe(2);
		expect(linkedList.head?.val).toBe(1);
		expect(linkedList.tail?.val).toBe(2);
	});

	it('shoud unshift a value correctly', () => {
		linkedList.unshift(0);
		expect(linkedList.head?.val).toBe(0);
		expect(linkedList.length).toBe(4);
	});

	it('shoud shift a value correctly', () => {
		expect(linkedList.shift()?.val).toBe(1);
		expect(linkedList.length).toBe(2);
		expect(linkedList.head?.val).toBe(2);
		expect(linkedList.tail?.val).toBe(3);
	});

	it('shoud get a value correctly', () => {
		expect(linkedList.get(0)?.val).toBe(1);
		expect(linkedList.get(1)?.val).toBe(2);
		expect(linkedList.get(2)?.val).toBe(3);
		expect(linkedList.get(100)).toBe(null);
	});

	it('shoud set a value correctly', () => {
		linkedList.set(1, 100);
		expect(linkedList.get(1)?.val).toBe(100);
		expect(linkedList.set(100, 100)).toBe(false);
	});

	it('shoud insert a value correctly', () => {
		expect(linkedList.insert(1, 100)).toBe(true);
		expect(linkedList.get(1)?.val).toBe(100);
		expect(linkedList.length).toBe(4);
	});

	it('shoud remove a value correctly', () => {
		expect(linkedList.remove(1)?.val).toBe(2);
		expect(linkedList.length).toBe(2);
	});

	it('shoud convert to array correctly', () => {
		expect(linkedList.toArray()).toEqual([1, 2, 3]);
	});
});
