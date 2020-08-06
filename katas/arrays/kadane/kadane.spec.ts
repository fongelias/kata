import { kadane } from './kadane';

describe('kadane', () => {
	it('should find the maximum sum of the subarray given positive and negative numbers', () => {
		const testArr = [1, 5, -1, 0, 10];
		expect(kadane(testArr)).toEqual(15);
	});

	it('should find the maximum sum of the subarray when there are no positive numbers', () => {
		const testArr = [0,-1, -5, 0, -4];
		expect(kadane(testArr)).toEqual(0);
	});

	it('should find the maximum sum of the subarray when the subarray is in the middle of the array', () => {
		const testArr = [34, -100, 20, 20, 20, -50, 39];
		expect(kadane(testArr)).toEqual(60);
	});

	it('should find the maximum sum of the subarray when a negative value is included', () => {
		const testArr = [320, -100, 500];
		expect(kadane(testArr)).toEqual(720);
	});

	it('should find the maximum sum of the subarray given various local maxima', () => {
		const testArr = [0,1,2,3,-1,-2,-3,2,3,4,-1,-2,-3,5];
		expect(kadane(testArr)).toEqual(9);
	});
});