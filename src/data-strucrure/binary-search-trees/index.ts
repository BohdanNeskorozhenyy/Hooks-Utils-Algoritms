/* eslint-disable no-constant-condition */
class Node<T> {
    constructor(
        public val: T,
        public left: Node<T> | null = null,
        public right: Node<T> | null = null,
        public count: number = 1,
    ){}
}
function defaultSelector<T>(val: T) {
    return val;
}
class BinarySearchTree<T> {
    public root: Node<T> | null = null;
    public selector: (val: T) => string | number | boolean | T;

    constructor(selector?: (val: T) => string | number | boolean | T) {
        this.selector = selector || defaultSelector;
    }

    insert(val: T) {
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
            let current = this.root;
            while (true) {
                if (this.selector(val) === this.selector(current.val)) {
                    current.count++;
                    return this;
                }
                if (this.selector(val) < this.selector(current.val)) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    }
                    current = current.right;
                }
            }
    }

    find(selector: T | ((val?: T) => boolean)) {
        let current = this.root;

        if (typeof selector === 'function') {
            const _selector = selector as (val?: T) => boolean;

            while (current !== null) {
                if (_selector(current.val)) {
                    return current;
                }
                if (_selector(current.left?.val)) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        } else {
            while (current !== null) {
                if (current.val === selector) {
                    return current;
                }
                if (selector === current?.left?.val) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }

        return null;
    }
}

export default BinarySearchTree;
