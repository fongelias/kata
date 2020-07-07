import { bubbleSort } from './bubbleSort';

describe('bubbleSort', () => {
	it('should sort an array', () => {
		const testArr = [3,1,2,4,6,89,8,6,4,3,4,6,8,3,3,7,3,6,2,8,7,3,2];
		expect(bubbleSort(testArr)).toBe(testArr.sort());
	});

	it('should sort an array with a length of 2', () => {
		const testArr = [99,33];
		expect(bubbleSort(testArr)).toBe(testArr.sort());
	});

	it('should sort an array with a length of 1', () => {
		const testArr = [10000];
		expect(bubbleSort(testArr)).toBe(testArr.sort());
	});
});
