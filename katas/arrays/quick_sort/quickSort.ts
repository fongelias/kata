export const quickSort = (array: number[]): number[] => {
	const move = (i: number, j: number) => {
		const element: number = array[i];
		array.splice(i, 1);
		array.splice(j, 0, element);
	}

	const partition = (start: number, end: number) => {
		let pivot = array.length - 1;
		let partitionIndex = start;
		for (let i = start; i < end; i++) {
			if (array[i] <= pivot) {
				move(i, partitionIndex);
				partitionIndex++;
			}
		}
		return partitionIndex;
	}

	const quickSortInternal = (start: number, end: number) => {
		if (start >= end) {
			return;
		}
		let pivot: number = partition(start, end);
		quickSortInternal(start, pivot - 1);
		quickSortInternal(pivot + 1, end);
		return array;
	}

	return quickSortInternal(0, array.length);
}
