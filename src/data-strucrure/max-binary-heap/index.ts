type TSelector<T> = (val: T) => string | number | boolean | T;

function defaultSelector<T>(val: T) {
    return val;
}

class MaxBinaryHeap<T> {
    public values: T[] = [];
    private selector: TSelector<T>;

    constructor(selector?: TSelector<T>) {
        this.selector = selector || defaultSelector;
    }

    private bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.values[parentIndex];

            if (this.selector(element) <= this.selector(parent)) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        return this;
    }

    insert(val: T) {
        this.values.push(val);
        this.bubbleUp();
    }
}

export default MaxBinaryHeap;
