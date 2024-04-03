import Queue from '../queue';

let queue: Queue<number>;

describe('Queue', () => {
    beforeEach(() => {
        queue = new Queue([1, 2, 3]);
    });

    it('should push', () => {
        queue.enqueue(4);
        expect(queue.size).toBe(4);
        expect(queue.first?.val).toBe(1);
        expect(queue.last?.val).toBe(4);
    });

    it('should pop', () => {
        expect(queue.dequeue()).toBe(1);
        expect(queue.size).toBe(2);
        expect(queue.first?.val).toBe(2);
        expect(queue.last?.val).toBe(3);
    });

    it('should convert to array', () => {
        expect(queue.toArray()).toEqual([1, 2, 3]);
    });

    it('should peek', () => {
        expect(queue.peek()).toBe(1);
        expect(queue.size).toBe(3);
    });

    it('should hav first and last to be equal', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.first).toBe(queue.last);
    });

    it('shod return null if queue is empty', () => {
        const queue = new Queue();
        expect(queue.dequeue()).toBeNull();
    });
});
