type GridTypes = boolean | number | string

export class Grid<T extends GridTypes> {
	private grid: [][] = [];

	public constructor(height: number, width: number, defaultValue: T) {
		const widthArray = new Array(width).fill(defaultValue);
		// Grid is stored as its reflection over the x axis
		this.grid = new Array(height)
			.fill(null)
			.map((val) => widthArray.slice());
	}

	public cell(x: number, y: number): T {
		return Array.isArray(this.grid[y]) ? this.grid[y][x] : undefined;
	}

	public above(x: number, y: number): T {
		return this.cell(x, y + 1);
	}

	public below(x: number, y: number): T {
		return this.cell(x, y - 1);
	}

	public leftOf(x: number, y: number): T {
		return this.cell(x - 1, y);
	}

	public rightOf(x: number, y: number): T {
		return this.cell(x + 1, y);
	}

	public neighbors(x: number, y: number): T[] {
		return [
			this.above(x, y),
			this.rightOf(x, y),
			this.below(x, y),
			this.leftOf(x, y)
		];
	}
}