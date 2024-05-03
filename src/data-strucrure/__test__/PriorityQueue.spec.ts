import PriorityQueue from '../priority-queue';

describe('PriorityQueue', () => {
    it('should enqueue a value correctly', () => {
        const heap = new PriorityQueue();
        heap.enqueue(19, 2);
        heap.enqueue(40, 1);
        heap.enqueue(100, 10);
        heap.enqueue(36, 8);
        heap.enqueue(6, 6);
        heap.enqueue(57, 5);
        expect(heap.values).toEqual([
            { val: 100, priority: 10 },
            { val: 36, priority: 8 },
            { val: 57, priority: 5 },
            { val: 40, priority: 1 },
            { val: 6, priority: 6 },
            { val: 19, priority: 2 },
        ]);
    });

    it('shoud dequeue a value correctly', () => {
        const heap = new PriorityQueue();
        heap.enqueue(19, 2);
        heap.enqueue(40, 1);
        heap.enqueue(100, 10);
        heap.enqueue(36, 8);
        heap.enqueue(6, 6);
        heap.enqueue(57, 5);
        expect(heap.dequeue()).toEqual({ val: 100, priority: 10 });
        expect(heap.dequeue()).toEqual({ val: 36, priority: 8 });
        expect(heap.dequeue()).toEqual({ val: 6, priority: 6 });
        expect(heap.dequeue()).toEqual({ val: 57, priority: 5 });
        expect(heap.dequeue()).toEqual({ val: 19, priority: 2 });
        expect(heap.dequeue()).toEqual({ val: 40, priority: 1 });
    });

    it('should enqueue a value correctly with min direction', () => {
        const heap = new PriorityQueue('min');
        heap.enqueue(19, 2);
        heap.enqueue(40, 1);
        heap.enqueue(100, 10);
        heap.enqueue(36, 8);
        heap.enqueue(6, 6);
        heap.enqueue(57, 5);
        expect(heap.values).toEqual([
            { val: 40, priority: 1 },
            { val: 19, priority: 2 },
            { val: 57, priority: 5 },
            { val: 36, priority: 8 },
            { val: 6, priority: 6 },
            { val: 100, priority: 10 },
        ]);
    });

    it('shoud dequeue a value correctly with min direction', () => {
        const heap = new PriorityQueue('min');
        heap.enqueue(19, 2);
        heap.enqueue(40, 1);
        heap.enqueue(100, 10);
        heap.enqueue(36, 8);
        heap.enqueue(6, 6);
        heap.enqueue(57, 5);
        expect(heap.dequeue()).toEqual({ val: 40, priority: 1 });
        expect(heap.dequeue()).toEqual({ val: 19, priority: 2 });
        expect(heap.dequeue()).toEqual({ val: 57, priority: 5 });
        expect(heap.dequeue()).toEqual({ val: 6, priority: 6 });
        expect(heap.dequeue()).toEqual({ val: 36, priority: 8 });
        expect(heap.dequeue()).toEqual({ val: 100, priority: 10 });
    });
});
