console.log('Denys');
console.log(4);
console.log('Добро '+'пожаловать '+' на курс');
// alert(2019-200)

document.getElementById('one').innerHTML = 'Hello World';

document.getElementById('two').innerHTML = 12 * 12;

document.querySelector('#one').innerHTML = "Hello World";

document.querySelector('span').innerHTML = "FWorld";

document.querySelector('#three').innerHTML = "<h1>new h1</h1>";

document.querySelector('#four').innerHTML = "<h1>again h1</h1>";
document.querySelector('#four').innerHTML += "<p>adding paragraph 1</p>";
document.querySelector('#four').innerHTML += "<p>adding paragraph 2</p>";

let five = document.querySelector('#five');
five.innerHTML = 3.4253;

let div7 = document.getElementById('seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

let z1 = 6;
let z2 = 3;
let eight = document.querySelector('.eight')
eight.innerHTML = z1 * z2;

let y1 = 6;
let y2 = 3;
let nine = document.querySelector('.nine')
nine.innerHTML = y1 / y2;

let x1 = "Hello";
let x2 = 5;
let ten = document.querySelector('.ten')
ten.innerHTML = x1 + x2;

let d1 = document.querySelector('.test-1');
console.log(d1);

let d2 = document.querySelector('.test-2');
console.log(d2);
d2 = 5;
console.log(d2);

let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('.s4');
console.log(divS3);

// document.querySelector('body').innerHTML = '';