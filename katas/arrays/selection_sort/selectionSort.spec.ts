import { selectionSort } from './selectionSort';

describe("selectionSort", () => {
	it("should sort an array", () => {
		const testArr = [1,3,2,5,6,3,8,4,6,7,8,7,5];
		expect(selectionSort(testArr)).toBe(testArr.sort());
	});

	it("should sort an array with a length of 2", () => {
		const testArr = [31,20];
		expect(selectionSort(testArr)).toBe(testArr.sort());
	});

	it("should sort an array with a length of 1", () => {
		const testArr = [100];
		expect(selectionSort(testArr)).toBe(testArr.sort());
	});
});
