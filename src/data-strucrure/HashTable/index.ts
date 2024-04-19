class HashTable {
    private keyMap: [string, any][][];
    constructor(size: number){
        this.keyMap = new Array(size);
    }

    private _hash(key: string){
        let total = 0;
        const WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++){
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key: string, value: any) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key: string) {
        const index = this._hash(key);
        if (!this.keyMap[index]) {
            return undefined;
        }
        return this.keyMap[index].find(([_key]) => _key === key)?.[1];
    }

    keys() {
        // return this.keyMap.reduce((acc: string[], cur) => [...acc, ...cur.map(([key]) => key)], []);
        return this.keyMap.flat().map(([key]) => key);
    }

    values() {
        // return this.keyMap.reduce((acc: string[], cur) => [...acc, ...cur.map(([key, _val]) => _val)], []);
        return this.keyMap.flat().map(([, value]) => value);
    }
}

export default HashTable;
