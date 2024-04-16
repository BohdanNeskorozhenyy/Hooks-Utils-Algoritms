class Node<T> {
    constructor(
        public val: T,
        public priority: number,
    ) {}
}

class PriorityQueue<T> {
    public values: Node<T>[] = [];

    private swap(index1: number, index2: number){
        const temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
    }

    private bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];

            if (element.priority <= parent.priority) break;

            this.swap(parentIndex, index);
            index = parentIndex;
        }
        return this;
    }

    private bubbleDown() {
        let index = 0;
        while (index < this.values.length) {
            const root = {
                value: this.values[index].priority,
                index,
            };

            const left = {
                value: this.values[2 * index + 1]?.priority || 0,
                index: 2 * index + 1,
            };

            const right = {
                value: this.values[2 * index + 2]?.priority || 0,
                index: 2 * index + 2,
            };
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
