import Stack from '../stacks';

let stack: Stack<number>;

describe('Stack', () => {
    beforeEach(() => {
        stack = new Stack([1, 2, 3]);
    });

    it('should push', () => {
        stack.push(4);
        expect(stack.size).toBe(4);
        expect(stack.first?.val).toBe(4);
        expect(stack.last?.val).toBe(1);
    });

    it('should pop', () => {
        expect(stack.pop()).toBe(3);
        expect(stack.size).toBe(2);
        expect(stack.first?.val).toBe(2);
        expect(stack.last?.val).toBe(1);
    });

    it('should peek', () => {
        expect(stack.peek()).toBe(3);
        expect(stack.size).toBe(3);
    });

    it('should convert to array', () => {
        expect(stack.toArray()).toEqual([3, 2, 1]);
    });
});
