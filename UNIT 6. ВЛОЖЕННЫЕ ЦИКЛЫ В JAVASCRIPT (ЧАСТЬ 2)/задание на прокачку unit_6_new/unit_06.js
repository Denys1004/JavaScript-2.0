
// Task 1
// Используя вложенные циклы создайте таблицу умножения от 1 до 10. Т.е. вначале столбец 1x1, 1x2...1x9 потом 2x1, 2x2 ... 2x9 и так далее. Оформить в виде столбцов где выводятся множители и результат.
let output1 = document.querySelector('.out-1')
let string1 = ''

function t1() {
    for(let i=1; i<11; i++){
        for(let k=1; k<11; k++){
            string1 += `${i} * ${k} = ${i*k} <br>`;
        }
        string1 += '<br>';
    }
    output1.innerHTML = string1;
    string1 = '';
}

document.querySelector('.btn-1').onclick = t1;


// Task 2 ********************************************
let output2 = document.querySelector('.out-2')
let string2 = ''

function t2() {

    output2.innerHTML = string2;
    string2 = '';
}

document.querySelector('.btn-2').onclick = t2;


// Task 3 ********************************************
// let output3 = document.querySelector('.out-3')
// let string3 = ''

// function t3() {
//     output3.innerHTML = 'WORKING!!!';
// }

// document.querySelector('.btn-3').onclick = t3;


// Task 4
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// ****
// ***
// **
// *
let output4 = document.querySelector('.out-4')
let string4 = ''

function t4() {
    for(let i=5; i>0; i--){
        for(let k=i; k>0; k--){
            string4 += "*";
        }
        string4 += '<br>'
    }

    output4.innerHTML = string4;
    string4 = '';
}

document.querySelector('.btn-4').onclick = t4;


// Task 5
// С помощью вложенных циклов и символа * нарисуйте:
//     *****
//   *****
// *****
let output5 = document.querySelector('.out-5')
let string5 = ''

function t5() {
    for(let i=0; i<3; i++){
        for(let k=)
    }

    output5.innerHTML = string5;
}

document.querySelector('.btn-5').onclick = t5;


// Task 6 ********************************************
let output6 = document.querySelector('.out-6')
let string6 = ''

function t6() {

    output6.innerHTML = string6;
}

document.querySelector('.btn-6').onclick = t6;


// Task 7 ********************************************
let output7 = document.querySelector('.out-7')
let string7 = ''

function t7() {
    output7.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-7').onclick = t7;


// Task 8 ********************************************
let output8 = document.querySelector('.out-8')
let string8 = ''

function t8() {
    output8.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-8').onclick = t8;


// Task 9 ********************************************
let output9 = document.querySelector('.out-9')
let string9 = ''

function t9() {
    output9.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-9').onclick = t9;


// Task 10 ********************************************
let output10 = document.querySelector('.out-10')
let string10 = ''

function t10() {
    output10.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-10').onclick = t10;


// Task 11 ********************************************
let output11 = document.querySelector('.out-11')
let string11 = ''

function t11() {
    output11.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-11').onclick = t11;


// Task 12 ********************************************
let output12 = document.querySelector('.out-12')
let string12 = ''

function t12() {
    output12.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-12').onclick = t12;


// Task 13 ********************************************
let output13 = document.querySelector('.out-13')
let string13 = ''

function t13() {
    output13.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-13').onclick = t13;


// Task 14 ********************************************
let output14 = document.querySelector('.out-14')
let string14 = ''

function t14() {
    output14.innerHTML = 'WORKING!!!';
}

document.querySelector('.btn-14').onclick = t14;