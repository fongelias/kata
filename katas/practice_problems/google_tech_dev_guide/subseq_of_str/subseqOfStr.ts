// # Problem
// https://techdevguide.withgoogle.com/paths/foundational/find-longest-word-in-dictionary-that-subsequence-of-given-string/#code-challenge

export const subseqOfStr = (str: string, dict: string[]): string => {
	const substrExists = (word: string): boolean => {
		let wordIdx = 0;
		let strIdx = 0;
		
		while (strIdx < str.length && wordIdx < word.length) {
			if (wordIdx + 1 === word.length) {
				return true;
			}

			wordIdx = word[wordIdx] === str[strIdx] ? wordIdx + 1 : wordIdx;
			strIdx++;
		}

		return false;
	}

	return dict.reduce((p,c) => {
		return substrExists(c) && (p.length < c.length) ? c : p;
	}, "");
}