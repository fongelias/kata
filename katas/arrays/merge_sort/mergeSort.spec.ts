import { mergeSort } from './mergeSort';

describe('mergeSort', () => {
	it('should sort an array', () => {
		const testArr = [1,3,2,2,4,9,7,3,6,4,6,7,8,7,5,4,3,4];
		expect(mergeSort(testArr)).toEqual(testArr.sort());
	});

	it('should sort an array with two elements', () => {
		const testArr = [300, 100];
		expect(mergeSort(testArr)).toEqual(testArr.sort());
	});

	it('should sort an array with one element', () => {
		const testArr = [1322];
		expect(mergeSort(testArr)).toEqual(testArr.sort());
	});
});