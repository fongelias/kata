export class Node<T> {
	public constructor(
		public value: T | null = null,
		public next: Node<T> = null
	) {}
}
