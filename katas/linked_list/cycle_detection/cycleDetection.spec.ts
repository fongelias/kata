import { cycleDetection } from './cycleDetection';
import { Node } from '../node';

describe('cycleDetection', () => {
	it('should detect a cycle', () => {
		const testValues = [1,2,3];
		const nodes = testValues.map((val) => new Node<number>(val, null));
		// connect nodes into cycle
		nodes.forEach((node, idx) => {
			node.next = nodes[idx + 1] ? nodes[idx + 1] : nodes[0];
		});

		expect(cycleDetection(nodes[0])).toEqual(true);
	});

	it('should detect a cycle that starts in the middle of the array', () => {
		const testValues = [10,5,3,1,2];
		const nodes = testValues.map((val) => new Node<number>(val, null));
		// connect nodes
		nodes.forEach((node, idx) => {
			node.next = nodes[idx + 1] ? nodes[idx + 1] : nodes[2];
		});
		expect(cycleDetection(nodes[0])).toEqual(true);
	});
})