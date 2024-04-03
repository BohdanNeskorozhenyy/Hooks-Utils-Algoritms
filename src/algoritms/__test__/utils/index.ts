import { ARRAYS_CASES } from '../data';

export function sortCommonTest(sortFunction: <T>(arr: T[], comparator: (a: T, b: T) => number) => T[]) {
	describe(`Testing ${sortFunction.name}`, () => {
		it('should correctly handle an empty array', () => {
			const sortedArr = sortFunction([], (a, b) => a - b);
			expect(sortedArr).toEqual([]);
		});

		it('should correctly sort an array of one element', () => {
			const sortedArr = sortFunction([1], (a, b) => a - b);
			expect(sortedArr).toEqual([1]);
		});

		it('should correctly sort an array of numbers in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.SIMPLE.UNSORTED, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.SIMPLE.SORTED_ASC);
		});

		it('should correctly sort an array of numbers in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.SIMPLE.UNSORTED, (a, b) => b - a);
			expect(sortedArr).toEqual(ARRAYS_CASES.SIMPLE.SORTED_DESC);
		});

		it('should leave an already sorted array unchanged in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.SIMPLE.SORTED_ASC, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.SIMPLE.SORTED_ASC);
		});

		it('should leave an already sorted array unchanged in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.SIMPLE.SORTED_DESC, (a, b) => b - a);
			expect(sortedArr).toEqual(ARRAYS_CASES.SIMPLE.SORTED_DESC);
		});

		it('should correctly sort an array with negative numbers in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_NEGATIVE.UNSORTED, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_NEGATIVE.SORTED_ASC);
		});

		it('should correctly sort an array with negative numbers in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_NEGATIVE.UNSORTED, (a, b) => b - a);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_NEGATIVE.SORTED_DESC);
		});

		it('should correctly sort an array containing zero', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_ZERO.UNSORTED, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_ZERO.SORTED_ASC);
		});

		it('should correctly sort an array with repeated numbers in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_REAPTED_NUMBERS.UNSORTED, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_REAPTED_NUMBERS.SORTED_ASC);
		});

		it('should correctly sort an array with repeated numbers in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_REAPTED_NUMBERS.UNSORTED, (a, b) => b - a);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_REAPTED_NUMBERS.SORTED_DESC);
		});

		it('should correctly sort an array of large numbers in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.LARGE_NUMBERS.UNSORTED, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.LARGE_NUMBERS.SORTED_ASC);
		});

		it('should correctly sort an array of large numbers in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.LARGE_NUMBERS.UNSORTED, (a, b) => b - a);
			expect(sortedArr).toEqual(ARRAYS_CASES.LARGE_NUMBERS.SORTED_DESC);
		});

		it('should correctly sort an array with numbers having decimals in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_DECIMALS.UNSORTED, (a, b) => a - b);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_DECIMALS.SORTED_ASC);
		});

		it('should correctly sort an array with numbers having decimals in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.WITH_DECIMALS.UNSORTED, (a, b) => b - a);
			expect(sortedArr).toEqual(ARRAYS_CASES.WITH_DECIMALS.SORTED_DESC);
		});

		it('should sort an array of objects based on a specific property in ascending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.OF_OBJECT.UNSORTED, (a, b) => a.id - b.id);
			expect(sortedArr).toEqual(ARRAYS_CASES.OF_OBJECT.SORTED_ASC);
		});

		it('should sort an array of objects based on a specific property in descending order', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.OF_OBJECT.UNSORTED, (a, b) => b.id - a.id);
			expect(sortedArr).toEqual(ARRAYS_CASES.OF_OBJECT.SORTED_DESC);
		});

		it('should sort an array of objects based on a specific property in ascending order with strings', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.OF_OBJECT_WITH_STRING_PROP.UNSORTED, (a, b) => a.name.localeCompare(b.name));
			expect(sortedArr).toEqual(ARRAYS_CASES.OF_OBJECT_WITH_STRING_PROP.SORTED_ASC);
		});

		it('should sort an array of objects based on a specific property in descending order with strings', () => {
			const sortedArr = sortFunction(ARRAYS_CASES.OF_OBJECT_WITH_STRING_PROP.UNSORTED, (a, b) => b.name.localeCompare(a.name));
			expect(sortedArr).toEqual(ARRAYS_CASES.OF_OBJECT_WITH_STRING_PROP.SORTED_DESC);
		});
	});
}
