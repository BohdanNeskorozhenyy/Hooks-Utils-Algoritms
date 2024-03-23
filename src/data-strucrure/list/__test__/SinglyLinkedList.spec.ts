import SinglyLinkedList from '../singly-linked-list';

let linkedList: SinglyLinkedList<number>;

describe('SinglyLinkedList', () => {
    beforeEach(() => {
		linkedList = new SinglyLinkedList([1, 2, 3]);
	});

    it('should push a value correctly', () => {
        linkedList.push(4);
        linkedList.push(5);
        expect(linkedList.head?.val).toBe(1);
        expect(linkedList.tail?.val).toBe(5);
        expect(linkedList.length).toBe(5);
    });

    it('shoud create an array from a list', () => {
        expect(linkedList.length).toBe(3);
        expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });
    
    it('should pop a value correctly', () => {
        expect(linkedList.pop()?.val).toBe(3);
        expect(linkedList.length).toBe(2);
    });

    it('should unshift a value correctly', () => {
        linkedList.unshift(0);
        expect(linkedList.head?.val).toBe(0);
        expect(linkedList.length).toBe(4);
    });

    it('should shift a value correctly', () => {
        expect(linkedList.shift()?.val).toBe(1);
        expect(linkedList.length).toBe(2);
    });

    it('should remove a value correctly', () => {
        expect(linkedList.remove(1)?.val).toBe(2);
        expect(linkedList.length).toBe(2);
    });

    it('should insert a value correctly', () => {
        linkedList.insert(1, 4);
        expect(linkedList.head?.next?.val).toBe(4);
        expect(linkedList.length).toBe(4);
    });

    it('shoud get a value correctly', () => {
        expect(linkedList.get(1)?.val).toBe(2);
    });

    it('should set a value correctly', () => {
        linkedList.set(1, 4);
        expect(linkedList.get(1)?.val).toBe(4);
    });

    it('should reverse a list correctly', () => {
        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([3, 2, 1]);
    });
    
});

