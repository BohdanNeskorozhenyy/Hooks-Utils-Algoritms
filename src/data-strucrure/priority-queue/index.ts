class Node<T> {
    constructor(
        public val: T,
        public priority: number,
    ) {}
}

class PriorityQueue<T> {
    public values: Node<T>[] = [];
    private direction: 'max' | 'min';

    constructor(direction: 'max' | 'min' = 'max') {
        this.direction = direction;
    }

    private swap(index1: number, index2: number){
        const temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    private bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        const comparator = (element: Node<T>, parent: Node<T>) => {
            if (this.direction === 'max') {
                return element.priority <= parent.priority;
            }
                return element.priority >= parent.priority;
        };

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];

            if (comparator(element, parent)) break;

            this.swap(parentIndex, index);
            index = parentIndex;
        }
        return this;
    }

    private bubbleDown() {
        let index = 0;
        const getChild = (index: number, isLeft: boolean) => ({
            value: this.values[2 * index + (isLeft ? 1 : 2)]?.priority || (this.direction === 'max' ? -Infinity : Infinity),
            index: 2 * index + (isLeft ? 1 : 2),
        });

        while (index < this.values.length) {
            const root = {
                value: this.values[index].priority,
                index,
            };

            const left = getChild(index, true);
            const right = getChild(index, false);

            if (this.direction === 'max') {
                if (left.value > root.value && right.value > root.value) {
                    const largest = left.value > right.value ? left : right;
                    this.swap(index, largest.index);
                    index = largest.index;
                } else if (left.value > root.value) {
                    this.swap(index, left.index);
                    index = left.index;
                } else if (right.value > root.value) {
                    this.swap(index, right.index);
                    index = right.index;
                } else {
                    break;
                }
            }
            if (this.direction === 'min') {
                if (left.value < root.value && right.value < root.value) {
                    const smallest = left.value < right.value ? left : right;
                    this.swap(index, smallest.index);
                    index = smallest.index;
                } else if (left.value < root.value) {
                    this.swap(index, left.index);
                    index = left.index;
                } else if (right.value < root.value) {
                    this.swap(index, right.index);
                    index = right.index;
                } else {
                    break;
                }
            }
        }
    }

    enqueue(val: T, priority: number) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    dequeue() {
        this.swap(0, this.values.length - 1);
        const removedValue = this.values.pop();
        this.bubbleDown();
        return removedValue;
    }
}

export default PriorityQueue;
