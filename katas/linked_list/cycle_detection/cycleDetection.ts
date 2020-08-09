import { Node } from '../Node';

export const cycleDetection = (node: Node): boolean => {
	let nodeAtSlowPointer = node.next;
	let nodeAtFastPointer = node.next ? node.next.next : null;

	while(nodeAtSlowPointer && nodeAtFastPointer) {
		if (nodeAtSlowPointer.value == nodeAtFastPointer.value) {
			return true;
		}

		nodeAtSlowPointer = nodeAtSlowPointer.next;
		nodeAtFastPointer = nodeAtFastPointer.next ? nodeAtFastPointer.next.next : null;
	}

	return false;
}