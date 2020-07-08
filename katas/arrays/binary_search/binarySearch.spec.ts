import { binarySearch } from './binarySearch';

describe('binarySearch', () => {
	const testArr = [0,1,2,3,4,5,6,7,8,9];

	it('should return the index of an element if it exists', () => {
		expect(binarySearch(9, testArr)).toEqual(9);
	});

	it('should return null if it does not exist', () => {
		expect(binarySearch(10, testArr)).toBeNull();
	});
});