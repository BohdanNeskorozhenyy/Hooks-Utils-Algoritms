export function searchCommonTest(searchFunction: <T>(arr: T[], target: number | string, selector?: (item: T) => number | string) => number) {
	describe(`Testing ${searchFunction.name}`, () => {
		it('should return -1 if target is not in the array', () => {
			const arr = [1, 2, 3, 4, 5];
			const target = 6;
			const result = searchFunction(arr, target);
			expect(result).toBe(-1);
		});

		it('should return the index of the target if it is in the array', () => {
			const arr = [1, 2, 3, 4, 5];
			const target = 3;
			const result = searchFunction(arr, target);
			expect(result).toBe(2);
		});

		it('shoud return the index of the target in array of objects', () => {
			const arr = [
				{ name: 'test', id: 1 },
				{ name: 'test', id: 2 },
				{ name: 'test', id: 3 },
				{ name: 'test', id: 4 },
				{ name: 'test', id: 5 },
				{ name: 'test', id: 6 },
			];
			const target = 6;
			const result = searchFunction(arr, target, (item) => item.id);
			expect(result).toBe(5);
		});

		it('shoud return -1 if target is not in the array in array of objects', () => {
			const arr = [
				{ name: 'test', id: 1 },
				{ name: 'test', id: 2 },
				{ name: 'test', id: 3 },
				{ name: 'test', id: 4 },
				{ name: 'test', id: 5 },
				{ name: 'test', id: 6 },
			];
			const target = 7;
			const result = searchFunction(arr, target, (item) => item.id);
			expect(result).toBe(-1);
		});
	});
}
