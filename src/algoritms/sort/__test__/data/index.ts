/* eslint-disable import/prefer-default-export */

export const ARRAYS_CASES = {
	SIMPLE: {
		UNSORTED: [3, 7, 2, 1, 5, 9, 6, 4, 8],
		SORTED_ASC: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		SORTED_DESC: [9, 8, 7, 6, 5, 4, 3, 2, 1],
	},
	WITH_NEGATIVE: {
		UNSORTED: [3, 7, 2, 1, 5, 9, 6, 4, 8, -1, -9],
		SORTED_ASC: [-9, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		SORTED_DESC: [9, 8, 7, 6, 5, 4, 3, 2, 1, -1, -9],
	},
	WITH_ZERO: {
		UNSORTED: [3, 7, 2, 1, 5, 9, 6, 4, 8, 0],
		SORTED_ASC: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		SORTED_DESC: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
	},
	WITH_REAPTED_NUMBERS: {
		UNSORTED: [3, 7, 2, 1, 5, 9, 6, 4, 8, 0, 3, 7, 2, 1, 5, 9, 6, 4, 8, 0],
		SORTED_ASC: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9],
		SORTED_DESC: [9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0, 0],
	},
	LARGE_NUMBERS: {
		UNSORTED: [1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009],
		SORTED_ASC: [1000000000, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000006, 1000000007, 1000000008, 1000000009],
		SORTED_DESC: [1000000009, 1000000008, 1000000007, 1000000006, 1000000005, 1000000004, 1000000003, 1000000002, 1000000001, 1000000000],
	},
	WITH_DECIMALS: {
		UNSORTED: [3.5, 7.5, 2.5, 1.5, 5.5, 9.5, 6.5, 4.5, 8.5],
		SORTED_ASC: [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5],
		SORTED_DESC: [9.5, 8.5, 7.5, 6.5, 5.5, 4.5, 3.5, 2.5, 1.5],
	},
	OF_OBJECT: {
		UNSORTED: [{ id: 1, name: 'test' }, { id: 2, name: 'test' }, { id: 3, name: 'test' }, { id: 4, name: 'test' }, { id: 5, name: 'test' }],
		SORTED_ASC: [{ id: 1, name: 'test' }, { id: 2, name: 'test' }, { id: 3, name: 'test' }, { id: 4, name: 'test' }, { id: 5, name: 'test' }],
		SORTED_DESC: [{ id: 5, name: 'test' }, { id: 4, name: 'test' }, { id: 3, name: 'test' }, { id: 2, name: 'test' }, { id: 1, name: 'test' }],
	},
	OF_OBJECT_WITH_STRING_PROP: {
		UNSORTED: [{ name: 'c' }, { name: 'a' }, { name: 'b' }],
		SORTED_ASC: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
		SORTED_DESC: [{ name: 'c' }, { name: 'b' }, { name: 'a' }],
	},
};
