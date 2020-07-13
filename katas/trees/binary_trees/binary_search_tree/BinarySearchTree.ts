
export class BinarySearchTreeNode<T> {
	constructor(value: T, left: BinarySearchTreeNode<T>, right: BinarySearchTreeNode<T>) {
		this.value = value;
		this.left = left;
		this.right = right;
	}

	insert(node: BinarySearchTreeNode<T>) {
		if (node.value >= this.value) {
			if (this.right) {
				this.right.insert(node);
			} else {
				this.right = node;
			}
		} else {
			if (this.left) {
				this.left.insert(node);
			} else {
				this.left = node;
			}
		}
	}
}

export class BinarySearchTree<T> {
	constructor(rootValue: T) {
		this.root = new BinarySearchTreeNode(rootValue);
	}

	insert(nodeValue: T) {
		this.root.insert(new BinarySearchTreeNode(nodeValue));
	}

	contains(nodeValue: T): boolean {
		const depthFirstSearch = (node: Node<T>): boolean => {
			if (!node) {
				return false;
			}

			if (node.value === nodeValue) {
				return true;
			}

			return depthFirstSearch(node.left) || depthFirstSearch(node.right);
		}

		return depthFirstSearch(this.root);
	}

	toBFArray(): T[] {
		const valueArr = [];
		const arr = [this.root];
		while(arr.length > 0) {
			const currNode = arr.shift();
			if (currNode.value) {
				valueArr.push(currNode.value);
			}
			if (currNode.left) {
				arr.push(currNode.left);
			}
			if (currNode.right) {
				arr.push(currNode.right);
			}
		}

		return valueArr;
	}

}