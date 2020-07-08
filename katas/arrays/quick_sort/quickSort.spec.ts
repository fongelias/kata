import { quickSort } from './quickSort';

describe('quickSort', () => {
	it('should sort an array', () => {
		const testArr = [1,3,2,4,5,7,4,2,5,8,6,5,6,6,5,3,3];
		expect(quickSort(testArr)).toEqual(testArr.sort());
	});

	it('should sort an array with 2 elements', () => {
		const testArr = [33, 11];
		expect(quickSort(testArr)).toEqual(testArr.sort());
	});

	it('should sort an array with one element', () => {
		const testArr = [10000];
		expect(quickSort(testArr)).toEqual(testArr.sort());
	});
});
