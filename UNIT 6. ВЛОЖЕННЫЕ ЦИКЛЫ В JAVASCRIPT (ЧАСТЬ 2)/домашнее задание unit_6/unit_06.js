//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
let output1 = document.querySelector('.out-1')
let string1 = ''

function t1() {
    for(let i=0; i<3; i++){
        for(let k=0; k<3; k++){
            string1 += '*';
        }
        string1 += '_';
    }
    output1.innerHTML = string1;
    string1 = '';
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
let output2 = document.querySelector('.out-2')
let string2 = ''

function t2() {
    for(let i=1; i<4; i++){
        string2 += i + "<br>";
        for(let k=0; k<3; k++){
            string2 += "*_";
        }
        string2 += "<br>";
    }
    output2.innerHTML = string2;
    string2 = '';
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
let output3 = document.querySelector('.out-3')
let string3 = ''

function t3() {
    for(let i=0; i<4; i++){
        for(let k=0; k<3; k++){
            string3 += "*_";
        }
        string3 += '<br>'
    }
    output3.innerHTML = string3;
    string3 = '';
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
let output4 = document.querySelector('.out-4')
let string4 = ''

function t4() {
    for(let i=1; i<4; i++){
        string4 +=  `${i}_`;
        for(let k=1; k<6; k++){
            string4 += `${k} `;
        }
    }
    output4.innerHTML = string4;
    string4 = '';
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
let output5 = document.querySelector('.out-5')
let string5 = ''

function t5() {
    for(let i=1; i<4; i++){
        for(let k=1; k<7; k++){
            if(k%2 == 0){
                string5 += "0";
            }else{
                string5 += "1";
            }
        }
        string5 +=  "<br>";
    }
    output5.innerHTML = string5;
    string5 = '';
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
let output6 = document.querySelector('.out-6')
let string6 = ''

function t6() {
    for(let i=1; i<4; i++){
        for(let k=1; k<7; k++){
            if(k%3 == 0){
                string6 += "x";
            }else if( k==1 || k==5){
                string6 += "1";
            }else{
                string6 += "0";
            }
        }
        string6 +=  "<br>";
    }
    output6.innerHTML = string6;
    string6 = '';
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
let output7 = document.querySelector('.out-7')
let string7 = ''

function t7() {
    for(let i=1; i<5; i++){
        for(let k=1; k<=i; k++){
            string7 += '*';
        }
        string7 += '<br>';
    }
    output7.innerHTML = string7;
    string7 = '';
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
let output8 = document.querySelector('.out-8')
let string8 = ''

function t8() {
    for(let i=5; i>=0; i--){
        for(let k=i; k>0; k--){
            string8 += '*';
        }
        string8 += '<br>';
    }

    output8.innerHTML = string8;
    string8 = '';
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
let output9 = document.querySelector('.out-9');
let string9 = '';
function t9() {
    for(let i=1; i<6; i++){
        for(let k=1; k<=i; k++){
            string9 += `${k} `;
        }
        string9 += "<br>";
    }

    output9.innerHTML = string9;
    string9 = '';
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
let output10 = document.querySelector('.out-10');
let string10 = '';

function t10() {
    for(let i=0; i<5; i++){
        for(let k=1; k<11; k++){
            if(i==0 && k<10){
                string10 += `0${k} `;
            }else{
                string10 += `${(i*10) + k} `;
            }
        }
        string10 += "<br>";
    }
    output10.innerHTML = string10;
    string10 = '';
}

document.querySelector('.b-10').onclick = t10;