/* eslint-disable no-constant-condition */
class Node<T> {
    constructor(
        public val: T,
        public left: Node<T> | null = null,
        public right: Node<T> | null = null,
        public count: number = 1,
    ){}
}

class BinarySearchTree<T> {
    public root: Node<T> | null = null;

    insert(val: T) {
        const node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        }
            let current = this.root;
            while (true) {
                if (val === current.val) {
                    current.count++;
                    return this;
                }
                if (val < current.val) {
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
}

export default BinarySearchTree;
