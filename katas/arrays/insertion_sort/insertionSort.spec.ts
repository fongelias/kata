import { insertionSort } from './insertionSort';

describe('insertionSort', () => {
	it('should sort an array', () => {
		const testArr = [3,1,2,2,5,10,13,20,0,5];
		expect(insertionSort(testArr)).toBe(testArr.sort());
	});

	it('should sort an array with a length of 2', () => {
		const testArr = [100, 4];
		expect(insertionSort(testArr)).toBe(testArr.sort());
	});

	it('should sort an array with a length of 1', () => {
		const testArr = [100];
		expect(insertionSort(testArr)).toBe(testArr.sort());
	});
})
