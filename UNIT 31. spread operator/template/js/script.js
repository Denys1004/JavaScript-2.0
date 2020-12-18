

// 1. Merging two arrays
const a = [3, 4, 5];
const b = ['c', 'd', 'e'];

const c = [...a, ...b];
console.log(c); // [3, 4, 5, "c", "d", "e"]

// 2. Clone of the array
const a = [3, 4, 5];
const b = ['c', 'd', 'e'];

const d= [...b];
console.log(d); // ["c", "d", "e"]

// 3. Transform string into array
const e = [...'hello'];
console.log(e); // ["h", "e", "l", "l", "o"]

// 4. Transform set into array
const f = [...new Set([1,1, 2, 2, 3, 4, 5])];
console.log(f); // [1, 2, 3, 4, 5]


// 5. Spread with functions
// How to pass multiple arguments into a function and convert them into array inside function
function test(){
    console.log(arguments); // Arguments(5) [3, 4, 5, 6, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ] - argumets will be as an object here 
    console.log([...arguments]); // [3, 4, 5, 6, 7] - after spread argumets will be as an array
}
test(3, 4, 5, 6, 7)

// 6. Каждый раз когда вы получаете NodeList ( например querySelectorAll() ), convert nodeList inro array
let p = document.querySelectorAll('p');
console.log(p); // NodeList(5) [p, p, p, p, p]
console.log([...p]); // [p, p, p, p, p] - array