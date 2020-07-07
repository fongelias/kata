export const selectionSort = (arr: number[]) => {
	for(let i = 0; i < arr.length; i++) {
		let smallest = arr[i];
		let smallestIdx = i;
		for(let j = i; j < arr.length; j++) {
			const current = arr[j];
			if (current < smallest) {
				smallest = current;
				smallestIdx = j;
			}
		}
		arr.splice(smallestIdx, 1);
		arr.splice(i, 0, smallest);
	}
	return arr;
}
