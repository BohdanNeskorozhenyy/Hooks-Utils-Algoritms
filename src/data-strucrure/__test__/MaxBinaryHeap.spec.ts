import MaxBinaryHeap from '../max-binary-heap';

describe('MaxBinaryHeap', () => {
    it('should insert a value correctly', () => {
        const heap = new MaxBinaryHeap();
        heap.insert(100);
        heap.insert(36);
        heap.insert(19);
        heap.insert(40);
        expect(heap.values).toEqual([100, 40, 19, 36]);
        heap.insert(50);
        expect(heap.values).toEqual([100, 50, 19, 36, 40]);
        heap.insert(120);
        expect(heap.values).toEqual([120, 50, 100, 36, 40, 19]);
    });

    it('shoud insert a value correctly with selector', () => {
        const heap = new MaxBinaryHeap<{ name: string; id: number }>((data) => data.id);
        heap.insert({ name: 'test', id: 100 });
        heap.insert({ name: 'test', id: 36 });
        heap.insert({ name: 'test', id: 19 });
        heap.insert({ name: 'test', id: 40 });
        expect(heap.values).toEqual([
            { name: 'test', id: 100 },
            { name: 'test', id: 40 },
            { name: 'test', id: 19 },
            { name: 'test', id: 36 },
        ]);
        heap.insert({ name: 'test', id: 50 });
        expect(heap.values).toEqual([
            { name: 'test', id: 100 },
            { name: 'test', id: 50 },
            { name: 'test', id: 19 },
            { name: 'test', id: 36 },
            { name: 'test', id: 40 },
        ]);
        heap.insert({ name: 'test', id: 120 });
        expect(heap.values).toEqual([
            { name: 'test', id: 120 },
            { name: 'test', id: 50 },
            { name: 'test', id: 100 },
            { name: 'test', id: 36 },
            { name: 'test', id: 40 },
            { name: 'test', id: 19 },
        ]);
    });

    it('should extract the max value correctly', () => {
        const heap = new MaxBinaryHeap();
        heap.insert(100);
        heap.insert(90);
        heap.insert(95);
        heap.insert(80);
        heap.insert(57);
        heap.insert(91);
        heap.insert(80);
        expect(heap.extractMax()).toBe(100);
        expect(heap.extractMax()).toBe(95);
        expect(heap.extractMax()).toBe(91);
        expect(heap.extractMax()).toBe(90);
        expect(heap.extractMax()).toBe(80);
        expect(heap.extractMax()).toBe(80);
        expect(heap.extractMax()).toBe(57);
        expect(heap.values).toEqual([]);
    });

    it('shoud extract the max value with selector correctly', () => {
        const heap = new MaxBinaryHeap<{ name: string; id: number }>((data) => data.id);
        heap.insert({ name: 'test', id: 100 });
        heap.insert({ name: 'test', id: 90 });
        heap.insert({ name: 'test', id: 95 });
        heap.insert({ name: 'test', id: 80 });
        heap.insert({ name: 'test', id: 57 });
        heap.insert({ name: 'test', id: 91 });
        heap.insert({ name: 'test', id: 80 });
        expect(heap.extractMax()?.id).toBe(100);
        expect(heap.extractMax()?.id).toBe(95);
        expect(heap.extractMax()?.id).toBe(91);
        expect(heap.extractMax()?.id).toBe(90);
        expect(heap.extractMax()?.id).toBe(80);
        expect(heap.extractMax()?.id).toBe(80);
        expect(heap.extractMax()?.id).toBe(57);
        expect(heap.values).toEqual([]);
    });
});
