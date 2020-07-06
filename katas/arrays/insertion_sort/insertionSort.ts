export const insertionSort = (arr: number[]) => {
	for(let i = 1; i < arr.length; i++) {
		const currValue = arr.splice(i, 1);
		let newIndex = i;
		while(currValue > arr[newIndex - 1]) {
			newIndex--;
		}
		// re-insert the value
		arr.splice(newIndex, 0, currValue);
	}

	return arr;
}