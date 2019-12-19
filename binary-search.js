const BinarySearch = (array, element, start = 0, end = array.length) => {
	let { length } = array;
	if (length == 0) return null;
	let mid = ((start + end) / 2) >> 0;
	if (element < array[mid]) {
		return BinarySearch(array, element, start, mid - 1);
	} else if (element > array[mid]) {
		console.log('mid', mid, start, end);
		return BinarySearch(array, element, mid + 1, length - 1);
	} else if (element === array[mid]) {
		console.log(true, mid);
		return true;
	} else {
		return false;
	}
};

const BinarySearchOccurence = (array, element, start = 0, end = array.length) => {
	let { length } = array;
	if (length == 0) return null;
	let count = -1;
	let mid = ((start + end) / 2) >> 0;
	if (element < array[mid]) {
		return BinarySearch(array, element, start, mid - 1);
	} else if (element > array[mid]) {
		return BinarySearch(array, element, mid + 1, length - 1);
	} else if (element === array[mid]) {
		console.log(true, count);
		count++;
		BinarySearchOccurence(array, element, start, mid - 1);
		BinarySearchOccurence(array, element, mid + 1, length - 1);
		return count++;
	} else {
		return false;
	}
};

const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11 ];
const element = 11;
const search = BinarySearchOccurence(array, element);
console.log(search);
