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
    private selector: (val: T) => string | number | boolean | T;

    constructor(selector?: (val: T) => string | number | boolean | T) {
        this.selector = selector || defaultSelector;
    }

    private comparator(selector: T | ((val?: T) => boolean), value?: T) {
        const isSelectorFunction = typeof selector === 'function';
        const selectorFuntion = selector as (val?: T) => boolean;
        const comparator = (val?: T) => (isSelectorFunction ? selectorFuntion(val) : selector === val);
        return comparator(value);
    }

    private findMinNode(root: Node<T>) {
        let current = root;

        while (current.left !== null) {
            current = current.left;
        }

        return current;
    }

    private removeRecursive(root: Node<T> | null, selector: T | ((val?: T) => boolean)) {
        if (root === null) {
            return null;
        }

        if (this.comparator(selector, root.val)) {
            if (root.left === null && root.right === null) {
                return null;
            } if (root.left === null) {
                return root.right;
            } if (root.right === null) {
                return root.left;
            }
                const minNode = this.findMinNode(root.right);
                root.val = minNode.val;
                root.right = this.removeRecursive(root.right, minNode.val);
                return root;
        } if (!this.comparator(selector, root.val)) {
            root.left = this.removeRecursive(root.left, selector);
        } else {
            root.right = this.removeRecursive(root.right, selector);
        }

        return root;
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

        while (current !== null) {
            if (this.comparator(selector, current.val)) {
                return current;
            }
            if (this.comparator(selector, current.left?.val)) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    remove(selector: T | ((val?: T) => boolean)) {
		this.root = this.removeRecursive(this.root, selector);
		return this;
	}
}

export default BinarySearchTree;
