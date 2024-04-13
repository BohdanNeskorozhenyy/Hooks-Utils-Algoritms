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

    it('shoud insert a object value correctly', () => {
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
});
