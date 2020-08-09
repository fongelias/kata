import { longestIncreasingSubseq } from './longestIncreasingSubseq';

describe('longestIncreasingSubseq', () => {
	it('should find the longest increasing subsequence', () => {
		const longestSequence = [1,2,3,4,5,6]
		const testArr = [1,2,3,1,2,3,4,...longestSequence,1,2,3];
		expect(longestIncreasingSubseq(testArr)).toEqual(longestSequence.length);
	});

	it('should find the subsequence when negative values are in the sequence', () => {
		const longestSequence = [-10,-1,0,1,2,3,4,5,6]
		const testArr = [1,-2,3,-1,2,3,-4,...longestSequence,1,2,3];
		expect(longestIncreasingSubseq(testArr)).toEqual(longestSequence.length);
	});
});