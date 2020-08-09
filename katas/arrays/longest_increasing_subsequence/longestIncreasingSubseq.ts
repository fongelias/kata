export const longestIncreasingSubseq = (arr: number): number => {
	let longestSeq = 1;
	let currSeq = 1;
	let idx = 1;

	while(idx < arr.length) {
		currSeq = arr[idx - 1] < arr[idx] ? currSeq + 1 : 1;
		longestSeq = Math.max(longestSeq, currSeq);
		idx++;
	}

	return longestSeq;
}