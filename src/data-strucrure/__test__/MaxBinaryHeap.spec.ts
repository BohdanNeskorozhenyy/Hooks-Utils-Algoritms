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
});
