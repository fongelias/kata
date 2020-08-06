import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
	describe('#constructor', () => {
		it('should create an empty linked list when nothing is passed', () => {
			const testLinkedList = new LinkedList<number>();
			expect(testLinkedList.length()).toEqual(0);
		});

		it('should create a linked list with all the values of a passed array, in order', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			testArr.map((val, idx) => {
				expect(val).toEqual(testArr[idx]);
			});
		});

		it('should create a linked list with a single passed value as the root node', () => {
			const testLinkedList = new LinkedList<number>(1);
			expect(testLinkedList.length()).toEqual(1);
			expect(testLinkedList.first()).toEqual(1);
		});
	})

	describe('#push', () => {
		it('should append an element to the end of the list', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			const newVal = 6;
			testLinkedList.push(newVal);
			expect(testLinkedList.last()).toEqual(newVal);
		});

		it('should append the element as the first element if the list is empty', () => {
			const testLinkedList = new LinkedList<number>();
			const newVal = 90210;
			testLinkedList.push(newVal);
			expect(testLinkedList.first()).toEqual(newVal);
		});

		it('should append each element in a passed array to the end of the list', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			const appendedArr = [6,7,8,9,0];
			testLinkedList.push(appendedArr);
			const expectedArr = [...testArr, ...appendedArr];
			expect(testLinkedList.toArray()).toEqual(expectedArr);
		});
	});

	describe('#unshift', () => {
		it('should append an element to the beginning of the list', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			const newVal = 0;
			testLinkedList.unshift(newVal);
			expect(testLinkedList.first()).toEqual(newVal);
		});

		it('should append the element as the first element if the list is empty', () => {
			const testLinkedList = new LinkedList<number>();
			const newVal = 90210;
			testLinkedList.unshift(newVal);
			expect(testLinkedList.first()).toEqual(newVal);
		});
	});

	describe('#clone', () => {
		it('should return a copy of the linkedList', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.clone()).toEqual(testLinkedList);
		});
	});

	describe('#generator', () => {
		it('should return an Generator for the linkedList', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			const generator = testLinkedList.generator();
			testArr.forEach((val: number) => {
				expect(generator.next().value).toEqual(val);
			});
			expect(generator.next().value).toBeUndefined();
		});

		it('should allow you to pass a starting index', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			const generatorStart = 2
			const generator = testLinkedList.generator(generatorStart);
			testArr.forEach((val: number, idx: number) => {
				if(idx >= generatorStart) {
					expect(generator.next().value).toEqual(val);
				}
			});
			expect(generator.next().value).toBeUndefined();
		});
	});

	describe('#get', () => {
		it('should return the value at the given index', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			testArr.forEach((val: number, idx: number) => {
				expect(testLinkedList.get(idx)).toEqual(val);
			});
		});

		it('should return null if there is nothing there', () => {
			const testArr = [1,2,3,4,5];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.get(5)).toEqual(null);
		});

	});

	describe('#first', () => {
		it('should return the first value in the list', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.first()).toEqual(testArr[0]);
		});

		it('should return null if there is nothing there', () => {
			const testLinkedList = new LinkedList<number>();
			expect(testLinkedList.first()).toEqual(null);
		});
	});

	describe('#last', () => {
		it('should return the value at the end of the list', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.last()).toEqual(testArr[testArr.length-1]);
		});

		it('should return null if there is nothing there', () => {
			const testLinkedList = new LinkedList<number>();
			expect(testLinkedList.last()).toEqual(null);
		});
	});

	describe('#indexOf', () => {
		it('should return the index of the specified value', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.indexOf(5)).toEqual(2);
		});

		it('should return -1 if there is nothing matches', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.indexOf(9)).toEqual(-1);
		});
	});

	describe('#toArray', () => {
		it('should return an array of the elements within the list', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.toArray()).toEqual(testArr);
		});
	});

	describe('#pop', () => {
		it('should return the last element', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.pop()).toEqual(7);
		});

		it('should remove the last element', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.last()).toEqual(7);
			testLinkedList.pop();
			expect(testLinkedList.last()).toEqual(5);
		});

		it('should return null if there is nothing there', () => {
			const testLinkedList = new LinkedList<number>();
			expect(testLinkedList.pop()).toEqual(null);
		});
	});

	describe('#shift', () => {
		it('should return the first element', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.shift()).toEqual(1);
		});

		it('should remove the first element', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.first()).toEqual(1);
			testLinkedList.shift();
			expect(testLinkedList.first()).toEqual(3);
		});

		it('should return null if there is nothing there', () => {
			const testLinkedList = new LinkedList<number>();
			expect(testLinkedList.shift()).toEqual(null);
		});
	});

	describe('#length', () => {
		it('should return the length of the array', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			expect(testLinkedList.length()).toEqual(4);
		});
	});

	describe('#set', () => {
		it('should set the value at the given index', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			const setIndex = 2;
			const newValue = 4;
			expect(testLinkedList.get(setIndex)).toEqual(testArr[setIndex]);
			testLinkedList.set(setIndex, newValue);
			expect(testLinkedList.get(setIndex)).toEqual(newValue);
		});

		it('should throw if there is nothing there', () => {
			const testLinkedList = new LinkedList<number>();
			let caught = false;

			try {
				testLinkedList.set(1, 1);
			} catch(e) {
				caught = true;
			}

			expect(caught).toEqual(true);
		});
	});

	describe('#remove', () => {
		it('should remove the value from the given index', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			const removalIndex = 2;
			expect(testLinkedList.length()).toEqual(4);
			expect(testLinkedList.get(removalIndex)).toEqual(testArr[removalIndex]);
			testLinkedList.remove(removalIndex);
			expect(testLinkedList.length()).toEqual(3);
			expect(testLinkedList.get(removalIndex)).toEqual(testArr[removalIndex + 1]);
		});

		it('should return the value if it is removed', () => {
			const testArr = [1,3,5,7];
			const testLinkedList = new LinkedList<number>(testArr);
			const removalIndex = 2;
			expect(testLinkedList.remove(removalIndex)).toEqual(testArr[removalIndex]);
		});

		it('should throw if there is nothing there', () => {
			const testLinkedList = new LinkedList<number>();
			let caught = false;

			try {
				testLinkedList.remove(1);
			} catch(e) {
				caught = true;
			}

			expect(caught).toEqual(true);
		});
	});

	describe('#map', () => {
		it('should update each value with the returned value of each function call', () => {
			const expectedValue = 5;
			const mockFunc = jest.fn().mockReturnValue(expectedValue);
			const initialValue = 1;
			const testLinkedList = new LinkedList<number>(initialValue);
			testLinkedList.map(mockFunc);
			expect(testLinkedList.first()).toEqual(expectedValue);
		});

		it('should call the passed function on every value and their index in the linkedList', () => {
			const expectedValue = 5;
			const mockFunc = jest.fn().mockReturnValue(expectedValue);
			const initialValue = 1;
			const testLinkedList = new LinkedList<number>(initialValue);
			testLinkedList.map(mockFunc);
			expect(mockFunc).toHaveBeenCalledWith(initialValue,0);
		});
	});
});
