class Node<T> {
	public constructor(
		public value: T | null = null,
		public next: Node<T> = null
	) {}
}

export class LinkedList<T> {
	private root?: Node<T> = null;

	public constructor(nodeValues: T | T[]) {
		if (nodeValues) {
			this.root = this.nodesFromArray(nodeValues)[0];
		}
	}

	public length(): number {
		// this should probably be stored as a private variable instead;
		let count: number = 0;
		let currNode: Node<T> = this.root;
		while(currNode) {
			count++;
			currNode = currNode.next;
		}

		return count;
	}

	public first(): T | null {
		return this.root ? this.root.value : null;
	}

	public last(): T | null {
		let currNode = this.root;

		while(currNode && currNode.next) {
			currNode = currNode.next;
		}

		return currNode? currNode.value: null;
	}

	public get(idx: number): number | null {
		let currIdx: number = 0;
		let currNode: Node<T> = this.root;
		while(currNode){
			if (currIdx === idx) {
				return currNode.value;
			}

			currNode = currNode.next;
			currIdx++;
		}

		return currNode ? currNode.value : null;
	}

	public set(idx: number, newValue: T): void {
		let currIdx: number = 0;
		let currNode: Node<T> = this.root;
		while(currNode){
			if (currIdx === idx) {
				currNode.value = newValue;
				return;
			}

			currNode = currNode.next;
			currIdx++;
		}

		throw new Error(`node at idx = ${idx} does not exist`);
	}

	public remove(idx: number): T {
		let currIdx: number = 0;
		let currNode: Node<T> = this.root;
		let previousNode: Node<T>;

		while(currNode) {
			if (currIdx === idx) {
				const nextNode = currNode.next;

				if (previousNode) {
					previousNode.next = nextNode;
				}

				return currNode.value;
			}

			previousNode = currNode;
			currNode = currNode.next;
			currIdx++;
		}

		throw new Error(`node at idx = ${idx} does not exist`);
	}

	public shift(): T | null {
		const valueToReturn = this.root?.value || null;
		this.root = this.root?.next;
		return valueToReturn;
	}

	public unshift(newValue: T): void {
		const newNode = new Node(newValue, this.root);
		this.root = newNode;
	}

	public push(newValue: T | T[]): void {
		let lastNode: Node<T> = this.root;
		let firstNewNode: Node<T> = this.nodesFromArray(newValue)[0];
		while(lastNode) {
			if (!lastNode.next) {
				lastNode.next = firstNewNode;
				return;
			}
			lastNode = lastNode.next;
		}

		this.root = firstNewNode;
	}

	public pop(): T | null {
		let currIdx: number = 0;
		let currNode: Node<T> = this.root;
		let prevNode: Node<T>;
		while(currNode) {
			if(!currNode.next) {
				if (prevNode) {
					prevNode.next = null;
				} else {
					this.root = null;
				}
				return currNode.value;
			}
			prevNode = currNode;
			currNode = currNode.next;
		}

		return null;
	}

	public toArray(): T[] {
		const arr = [];

		let currNode = this.root;
		while(currNode) {
			arr.push(currNode.value);
			currNode = currNode.next;
		}

		return arr;
	}

	public indexOf(searchValue: T): number {
		let currIdx = 0;
		let currNode = this.root;
		while(currNode) {
			if (currNode.value === searchValue) {
				return currIdx;
			}

			currIdx++;
			currNode = currNode.next;
		}

		return -1;
	}

	public clone(): LinkedList<T> {
		return new LinkedList(this.toArray());
	}

	public map(callback: () => T): void {
		let currNode = this.root;
		let currIdx = 0;
		while(currNode) {
			currNode.value = callback(currNode.value, currIdx);
			currNode = currNode.next;
			currIdx++;
		}
	}

	public generator(startingIdx: number = 0): Generator<number, any, any> {
		const root = this.root;

		function* generator() {
			let currNode = root;
			let currIdx = 0;
			while(currNode) {
				if (currIdx >= startingIdx) {
					yield currNode.value;
				}
				currNode = currNode.next;
				currIdx++;
			}
		}

		return generator();
	}

	private nodesFromArray(nodeValues: T | T[]): Node<T>[] {
		if (!Array.isArray(nodeValues)) {
			return [new Node(nodeValues)];
		}

		const nodeArr: Node<T>[] = [];

		nodeValues.forEach((value, idx) => {
			const newNode: Node<T> = new Node<T>(value);

			if (idx > 0) {
				this.connectNodes(nodeArr[idx - 1], newNode);
			}

			nodeArr.push(newNode);
		});

		return nodeArr;
	}

	private connectNodes(fromNode: Node<T>, toNode: Node<T>): void {
		fromNode.next = toNode;
	}
}