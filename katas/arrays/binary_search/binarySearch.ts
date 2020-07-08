export const binarySearch = (
	subject: number,
	searchSpace: number[]
): number | null => {
	let upperBound = searchSpace.length - 1;
	let lowerBound = 0;
	while(lowerBound <= upperBound) {
		let mid = Math.floor((upperBound + lowerBound) / 2);
		if (searchSpace[mid] == subject) {
			return mid;
		}

		if (searchSpace[mid] < subject) {
			lowerBound = mid + 1;
		}

		if (searchSpace[mid] > subject) {
			upperBound = mid - 1;
		}
	}

	return null;
}
