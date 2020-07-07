export const bubbleSort = (arr: number[]) => {
	let hasSwapped = true;
	const swap = (i) => {
		const toMove = arr.splice(i, 1)[0];
		arr.splice(i - 1, 0, toMove);
		hasSwapped = true;
	}
	while(hasSwapped) {
		hasSwapped = false;
		for(let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				swap(i);
			}
		}
	}
	return arr;
}
