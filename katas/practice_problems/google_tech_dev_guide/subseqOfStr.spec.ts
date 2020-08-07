import { subseqOfStr } from './subseqOfStr';

describe('subseqOfStr', () => {
	it('should return the longest word in the passed words that is a substring of the passed string', () => {
		const testString = "abppplee";
		const testWords = ["able", "ale", "apple", "bale", "kangaroo"]
		const expectedAnswer = testWords[2];
		expect(subseqOfStr(testString, testWords)).toEqual(expectedAnswer);
	});
});