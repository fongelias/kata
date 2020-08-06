export const kadane = (arr: number[]): number => {
	let localMax: number[] = [arr[0]];

	for(let i = 1; i < arr.length; i++) {
		localMax[i] = Math.max(arr[i], arr[i] + localMax[i - 1]);
	}
	return localMax.reduce((p,c) => Math.max(p,c), arr[0]);
}