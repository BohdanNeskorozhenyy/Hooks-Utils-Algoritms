import PriorityQueue from '../priority-queue';

let heap: PriorityQueue<number>;

describe('PriorityQueue', () => {
    beforeEach(() => {
        heap = new PriorityQueue();
        heap.enqueue(19, 2);
        heap.enqueue(40, 1);
        heap.enqueue(100, 10);
        heap.enqueue(36, 8);
    });

    it('should enqueue a value correctly', () => {
        expect(heap.values).toEqual([
            { val: 100, priority: 10 },
            { val: 36, priority: 8 },
            { val: 19, priority: 2 },
            { val: 40, priority: 1 },
        ]);
    });

    it('shoud dequeue a value correctly', () => {
        expect(heap.dequeue()).toEqual({ val: 100, priority: 10 });
        expect(heap.dequeue()).toEqual({ val: 36, priority: 8 });
        expect(heap.dequeue()).toEqual({ val: 19, priority: 2 });
        expect(heap.dequeue()).toEqual({ val: 40, priority: 1 });
    });
});
