let arr = [1, 2, 3, 4, 5];
		
// to add element to the end of the array
arr.push(6)  // [1, 2, 3, 4, 5, 6]
		
// to remove last element of the array
arr.pop()  // [1, 2, 3, 4] Method .pop() returns last element of the array
	
// to remove any element of the array
arr.splice(indexToRemove, numberToRemove);
arr.splice(4, 1); // [1, 2, 3, 4] - start from index 4, delete 1 element
arr.splice(2, 1); // [1, 2, 4, 5] - start from index 2, delete 1 element
arr.splice(1, 2); // [1, 4, 5] - start from index 1, delete 2 elements
	
// remove first element of the array and make indexes shifted 
arr.shift(); //  [2, 3, 4, 5, 6] Method removes the first element from an array and returns that removed element.
	
// to add element(s) to the beginning of the array
arr.unshift(8,9); // [8, 9, 1, 2, 3, 4, 5] Method unshift returns new length of the array

// reversing array 
arr.reverse();

// .indexOf(val) - returns the index, of that element, or -1 if the element does not exist.
arr.indexOf(3) // 2
arr.indexOf(555) // -1

// arr.concat(secondArrayName, thirdArrayName, fourthArrayName) to merge two or more arrays
let arr = [1, 2, 3, 4, 5];
let arr2 = ['hello', 6]
let newarr = [];

let newarr = arr.concat(arr2); // [1, 2, 3, 4, 5, "hello", 6]


// includes() method checks if an array includes a certain value among its elements, 
//returning true or false as appropriate
arr.includes(2) //true
arr.includes(6) // false


// The join() method creates and returns a new string by concatenating all of the elements in an arra
const elements = ['Fire', 'Air', 'Water'];

elements.join(); // output: "Fire,Air,Water"
elements.join(''); // output: "FireAirWater"
elements.join('-'); // output: "Fire-Air-Water"