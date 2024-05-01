import HashTable from '../hash-table';

describe('HashTable', () => {
    let hashTable: HashTable;

    beforeEach(() => {
        hashTable = new HashTable(53);
        hashTable.set('foo', 'bar1');
        hashTable.set('foo1', 'bar2');
        hashTable.set('foo2', 'bar3');
        hashTable.set('foo3', 'bar4');
    });

    it('should correctly set and get values', () => {
        expect(hashTable.get('foo')).toBe('bar1');
        expect(hashTable.get('foo1')).toBe('bar2');
        expect(hashTable.get('foo2')).toBe('bar3');
        expect(hashTable.get('foo3')).toBe('bar4');
        expect(hashTable.get('foo4')).toBe(undefined);
    });

    it('should save and get correctly keys with same hash index', () => {
        const hashTable = new HashTable(17);
        hashTable.set('maroon', 'bar1');
        hashTable.set('yellow', 'bar2');
        expect(hashTable.get('maroon')).toBe('bar1');
        expect(hashTable.get('yellow')).toBe('bar2');
    });

    it('should correctly return all keys', () => {
        const keys = hashTable.keys();
        expect(keys).toBeInstanceOf(Array);
        expect(keys).toContain('foo');
        expect(keys).toContain('foo1');
        expect(keys).toContain('foo2');
        expect(keys).toContain('foo3');
    });

    it('should correctly return all values', () => {
        const values = hashTable.values();
        expect(values).toBeInstanceOf(Array);
        expect(values).toContain('bar1');
        expect(values).toContain('bar2');
        expect(values).toContain('bar3');
        expect(values).toContain('bar4');
    });
});
