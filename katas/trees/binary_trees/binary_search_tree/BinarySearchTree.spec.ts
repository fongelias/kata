import { BinarySearchTree } from './BinarySearchTree';

describe('BinarySearchTree', () => {
	describe('#insert', () => {
		it('should insert nodes to the left of nodes with a larger value', () => {
			const binarySearchTree = new BinarySearchTree(50);
			const newValue = 20;
			binarySearchTree.insert(newValue);
			expect(binarySearchTree.root.left.value).toEqual(newValue);
		});

		it('should insert nodes to the right of nodes with a smaller value', () => {
			const binarySearchTree = new BinarySearchTree(50);
			const newValue = 100;
			binarySearchTree.insert(newValue);
			expect(binarySearchTree.root.right.value).toEqual(newValue);
		});

		it('should insert recursively', () => {
			const binarySearchTree = new BinarySearchTree(50);
			const newValue = 10;
			// first row of nodes
			binarySearchTree.insert(100);
			binarySearchTree.insert(20);
			// second row of nodes
			binarySearchTree.insert(newValue)
			expect(binarySearchTree.root.left.left.value).toEqual(newValue);
		});
	});

	describe('#contains', () => {
		it('should return true if the tree contains the element', () => {
			const binarySearchTree = new BinarySearchTree(50);
			const searchValue = 90;
			binarySearchTree.insert(1);
			binarySearchTree.insert(100);
			binarySearchTree.insert(32);
			binarySearchTree.insert(75);
			binarySearchTree.insert(searchValue);
			expect(binarySearchTree.contains(searchValue)).toBe(true);
		});

		it('should return false if the tree does not contain the element', () => {
			const binarySearchTree = new BinarySearchTree(50);
			binarySearchTree.insert(1);
			binarySearchTree.insert(100);
			binarySearchTree.insert(32);
			binarySearchTree.insert(75);
			binarySearchTree.insert(55);
			expect(binarySearchTree.contains(90)).toBe(false);
		});
	});

	describe('#toBFArray', () => {
		it('should convert the tree into an array', () => {
			const binarySearchTree = new BinarySearchTree(50);
			const values = [100,21,323,20,60,55];
			values.forEach((value) => binarySearchTree.insert(value));
			expect(binarySearchTree.toBFArray().length).toEqual(values.length + 1);
		});

		it('should convert the tree depth first', () => {
			const binarySearchTree = new BinarySearchTree(50);
			// insert values
			const values = [100,21,323,20,60,55];
			values.forEach((value) => binarySearchTree.insert(value));
			// test
			const result = binarySearchTree.toBFArray();
			const expectedResult = [50,21,100,20,60,323,55];
			expect(result).toEqual(expectedResult);
		});
	});
});
