/* eslint-disable no-constant-condition */
import Queue from '../queue';

type TSelector<T> = (val: T) => string | number | boolean | T;
type TComparator<T> = (val?: T) => boolean;

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
    private selector: TSelector<T>;

    constructor(selector?: TSelector<T>) {
        this.selector = selector || defaultSelector;
    }

    private comparator(target: T | TComparator<T>, value?: T) {
        const isSelectorFunction = typeof target === 'function';
        const targetFunc = target as TComparator<T>;
        const comparator = (val?: T) => (isSelectorFunction ? targetFunc(val) : target === val);
        return comparator(value);
    }

    private findMinNode(root: Node<T>) {
        let current = root;

        while (current.left !== null) {
            current = current.left;
        }

        return current;
    }

    private removeRecursive(root: Node<T> | null, value: T | TComparator<T>) {
        if (root === null) {
            return null;
        }

        if (this.comparator(value, root.val)) {
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
        } if (!this.comparator(value, root.val)) {
            root.left = this.removeRecursive(root.left, value);
        } else {
            root.right = this.removeRecursive(root.right, value);
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

    find(value: T | TComparator<T>) {
        let current = this.root;

        while (current !== null) {
            if (this.comparator(value, current.val)) {
                return current;
            }
            if (this.comparator(value, current.left?.val)) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    remove(value: T | TComparator<T>) {
		this.root = this.removeRecursive(this.root, value);
		return this;
	}

    bfs(callback?: (val: T) => any): T[] {
        if (!this.root) return [];
        const arr: T[] = [];
        const queue = new Queue<Node<T>>();
        queue.enqueue(this.root);

        while (queue.size) {
            const node = queue.dequeue();
            if (node!.left) {
                queue.enqueue(node!.left);
            }
            if (node!.right) {
                queue.enqueue(node!.right);
            }
            if (callback) {
                callback(node!.val);
            }
            arr.push(node!.val);
        }
        return arr;
    }

    dfsPreOrder(callback?: (val: T) => any): T[] {
        if (!this.root) return [];
        const arr: T[] = [];
        function traverse(node: Node<T>){
            arr.push(node.val);
            if (callback) callback(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return arr;
    }
}

export default BinarySearchTree;
