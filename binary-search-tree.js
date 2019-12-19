class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
		this.size = 0;
	}

	insert(value) {
		const newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
		this.size++;
	}

	insertNode(node, newNode) {
		if (node.value < newNode.value) {
			if (node.right === null) {
				return (node.right = newNode);
			} else this.insertNode(node.right, newNode);
		}
		if (node.value > newNode.value) {
			if (node.left === null) {
				return (node.left = newNode);
			} else this.insertNode(node.left, newNode);
		}
	}

	remove(value) {
		this.root = this.removeNode(this.root, value);
	}
	removeNode(node, key) {
		if (node === null) return null;

		if (key < node.value) {
			node.left = this.removeNode(node.left, key);
			return node;
		} else if (key > node.value) {
			node.right = this.removeNode(node.right, key);
			return node;
		} else {
			if (node.left === null && node.right === null) {
				node = null;
				return node;
			} else if (node.left === null && node.right !== null) {
				node = node.right;
				return node;
			} else if (node.left !== null && node.right === null) {
				node = node.left;
				return node;
			}
			const minRightNode = this.findMinNode(node.right);
			node.value = minRightNode.value;
			node.right = this.removeNode(node.right, minRightNode);
		}
	}

	inorder(node = this.root, data) {
		if (node === null) return;
		this.inorder(node.left);
		this.inorder(node.right);
		console.log(node.value, 'inorder');
	}

	maxHeightOfTree(node = this.root) {
		if (node === null) return -1;
		let leftHeight = this.maxHeightOfTree(node.left);
		let rightHeight = this.maxHeightOfTree(node.right);
		if (leftHeight > rightHeight) {
			return leftHeight + 1;
		} else {
			return rightHeight + 1;
		}
	}

	find(node, value) {
		if (value < node.value) {
			return this.find(node.left, value);
		} else if (value > node.value) {
			return this.find(node.right, value);
		} else {
			return node;
		}
	}

	inorderSuccessor(node = this.root, value) {
		let current = this.find(node, value);
		if (current.value === null) return null;
		if (current.right !== null) {
			return this.findMinNode(current.right);
		} else {
			let successor = null;
			let ancestor = this.root;
			while (current !== ancestor) {
				if (ancestor.value > current.value) {
					successor = ancestor; // deepest node
					ancestor = ancestor.left;
				} else {
					ancestor = ancestor.right;
				}
			}
			return successor;
		}
	}

	findMinNode(node) {
		if (node.left === null) {
			return node;
		}
		this.findMinNode(node.left);
	}

	lowestCommonAncestor(node, p, q) {
		if (node === null) return null;
		if (p < node.value && q < node.value) return this.lowestCommonAncestor(node.left, p, q);
		else if (p > node.value && q > node.value) return this.lowestCommonAncestor(node.right, p, q);
		else return node;
	}
}

const bst = new BinarySearchTree();
bst.insert(6);
bst.insert(1);
bst.insert(2);
bst.insert(8);
bst.insert(4);
bst.insert(5);
bst.insert(10);
// bst.search(5);
// console.log(bst.maxHeightOfTree());
// bst.inorder();
// const successor = bst.inorderSuccessor(bst.root, 1);
// console.log(successor ? successor.value : null);
const lca = bst.lowestCommonAncestor(bst.root, 4, 9);
console.log(lca.value);
