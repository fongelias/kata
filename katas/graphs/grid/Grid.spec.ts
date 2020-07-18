import { Grid } from './Grid';

describe('Grid', () => {
	it('should generate a grid with the appropriate dimensions', () => {
		const height = 5;
		const width = 10;
		const grid = new Grid<boolean>(height, width, true);
		const cornerCells = [
			grid.cell(0, 0),
			grid.cell(width - 1, 0),
			grid.cell(0, height - 1),
			grid.cell(width - 1, height - 1)
		];
		cornerCells.forEach((cell) => expect(cell).toBeTruthy());
		const outOfBoundNeighbors = [
			grid.below(0,0),
			grid.leftOf(0,0),
			grid.below(width - 1, 0),
			grid.rightOf(width - 1, 0),
			grid.above(0, height - 1),
			grid.leftOf(0, height - 1),
			grid.above(width - 1, height - 1),
			grid.rightOf(width - 1, height - 1)
		];
		outOfBoundNeighbors.forEach((cell) => expect(cell).toBeFalsy());
	});

	describe('#cell', () => {
		it('should return the cell if it exists', () => {
			const grid = new Grid<boolean>(1, 1, true);
			expect(grid.cell(0,0)).toBeTruthy();
		});

		it('should return null if the cell does not exist', () => {
			const grid = new Grid<boolean>(1, 1, true);
			expect(grid.cell(0,1)).toBeFalsy();
		});
	});

	describe('#above', () => {
		it('should return the cell above the coordinates', () => {
			const grid = new Grid<boolean>(2, 1, true);
			expect(grid.above(0,0)).toEqual(grid.cell(0,1));
		});
	});

	describe('#below', () => {
		it('should return the cell below the coordinates', () => {
			const grid = new Grid<boolean>(2, 1, true);
			expect(grid.below(0,1)).toEqual(grid.cell(0,0));
		});
	});

	describe('#leftOf', () => {
		it('should return the cell left of the coordinates', () => {
			const grid = new Grid<boolean>(1, 2, true);
			expect(grid.leftOf(1,0)).toEqual(grid.cell(0,0));
		});
	});

	describe('#rightOf', () => {
		it('should return the cell right of the coordinates', () => {
			const grid = new Grid<boolean>(1, 2, true);
			expect(grid.rightOf(0,0)).toEqual(grid.cell(1,0));
		});
	});

	describe('#neighbors', () => {
		it('should return an array of the neighboring cells', () => {
			const grid = new Grid<boolean>(3, 3, true);
			const neighbors = grid.neighbors(1,1);
			expect(neighbors.length).toEqual(4);
		});

		it.only('should return an array of the neighboring cells in order', () => {
			const grid = new Grid<boolean>(3, 3, true);
			const neighbors = grid.neighbors(1,1);
			const expectedNeighbors = [
				grid.above(1,1),
				grid.rightOf(1,1),
				grid.below(1,1),
				grid.leftOf(1,1)
			];
			expect(neighbors).toEqual(expectedNeighbors);
		});

		it('should include undefined when a neighbor does not exist', () => {
			const grid = new Grid<boolean>(2, 2, true);
			const neighbors = grid.neighbors(0,0);
			const expectedNeighbors = [
				grid.above(0,0),
				grid.rightOf(0,0),
				undefined,
				undefined
			];
			expect(neighbors).toEqual(expectedNeighbors);
		});
	});
});