import BinarySearchTree from '../binary-search-trees';

describe('BinarySearchTree', () => {
    it('should insert a value correctly', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        expect(tree.root?.val).toBe(10);
        tree.insert(15);
        expect(tree.root?.right?.val).toBe(15);
        tree.insert(5);
        expect(tree.root?.left?.val).toBe(5);
        tree.insert(20);
        expect(tree.root?.right?.right?.val).toBe(20);
        tree.insert(6);
        expect(tree.root?.left?.right?.val).toBe(6);
        tree.insert(2);
        expect(tree.root?.left?.left?.val).toBe(2);
    });

    it('shoud increase the count of a value correctly', () => {
        const tree = new BinarySearchTree();
        tree.insert(10);
        expect(tree.root?.count).toBe(1);
        tree.insert(10);
        expect(tree.root?.count).toBe(2);
        tree.insert(15);
        expect(tree.root?.right?.count).toBe(1);
        tree.insert(15);
        expect(tree.root?.right?.count).toBe(2);
    });
});
