export const mergeSort = (arr: number[]) => {
	// base case
	if (arr.length <= 1) {
		return arr;
	}
	// merge
	const merge = (a1: number[], a2: number[]) => {
		const newArr = [];
		while(a1.length > 0 && a2.length > 0) {
			if (a1[0] && a1[0] < a2[0]) {
				newArr.push(a1.shift());
			} else if (a2[0]) {
				newArr.push(a2.shift());
			}
		}
		return newArr.concat(a1, a2);
	}

	const midPoint = Math.floor(arr.length / 2);
	const arr1 = arr.slice(0, midPoint);
	const arr2 = arr.slice(midPoint, arr.length);
	return merge(mergeSort(arr1), mergeSort(arr2));
}
