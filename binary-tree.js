class Tree {
	constructor(value) {
		this.value = value;
		this.descendants = [];
	}
}

const root = new Tree(1);
root.descendants.push(1, 2);
const level1 = new Tree(3);
level1.descendants.push(4, 5);
root.descendants.push(level1);
const level2 = new Tree(6);
level2.descendants.push(7, 8, 9);
level1.descendants.push(level2);
console.log(root.value, root.descendants);

