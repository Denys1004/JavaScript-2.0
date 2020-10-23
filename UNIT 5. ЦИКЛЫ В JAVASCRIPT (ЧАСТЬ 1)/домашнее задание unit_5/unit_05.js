//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
let string1 = '';
let output1 = document.querySelector('.out-1')

function t1() {
    for(let i=1; i<51; i++){
        string1 += i + ' ';
    }
    output1.innerHTML = string1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
let string2 = '';
let output2 = document.querySelector('.out-2')

function t2() {
    for(let i=2; i<=122; i=i+2){
        string2 += i + ' ';
    }
    output2.innerHTML = string2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
let string3 = '';
let output3 = document.querySelector('.out-3')

function t3() {
    for(let i=25; i>=7; i--){
        string3 += i + " ";
    }
    output3.innerHTML = string3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
let string4 = '';
let output4 = document.querySelector('.out-4')

function t4() {
    for(let i=77; i>=35; i=i-3){
        string4 += i + '_';
    }
    output4.innerHTML = string4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
let string5 = '';
let output5 = document.querySelector('.out-5')

function t5() {
    for(let i=1; i<=17; i++){
        if(i%2 == 0){
            string5 += i + "_**";
        }else{
            string5 += i + "_*";
        }
    }
    output5.innerHTML = string5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
//
// ******<br>
// ******<br>
// ******<br>
//
//Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов. Перенос строки - br. Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
//
let input_field6 = document.querySelector('.i-6')
let output6 = document.querySelector('.out-6')
let string6 = '';

function t6() {
    let how_many = +input_field6.value;
    for( let i=0; i<how_many; i++){
        string6 += "******" + '<br>';
    }
    output6.innerHTML = string6;

    //reset
    input_field6.value = '';
    string6 = '';
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1 0
// Задача решается с помощью цикла.
let input_field7 = document.querySelector('.i-7')
let output7 = document.querySelector('.out-7')
let string7 = '';

function t7() {
    let number = +input_field7.value
    for(let i=number; i>=0; i-- ){
        string7 += i + ' ';
    }
    output7.innerHTML = string7;

    //reset
    input_field7.value = '';
    string7 = '';
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.
let input_field1 = document.querySelector('.i-81')
let input_field2 = document.querySelector('.i-82')
let output8 = document.querySelector('.out-8')
let string8 = '';

function t8() {
    let num1 = input_field1.value
    let num2 = input_field2.value
    for(let i=num1; i<=num2; i++ ){
        string8 += i + ' ';
    }
    output8.innerHTML = string8;
    
    //reset
    input_field1.value = '';
    input_field2.value = '';
    string8 = '';
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один
let input_field91 = document.querySelector('.i-91')
let input_field92 = document.querySelector('.i-92')
let output9 = document.querySelector('.out-9')
let string9 = '';

function t9() {
    let num1 = input_field91.value
    let num2 = input_field92.value
    if(num1 > num2){
        for(let i = num2; i<=num1; i++ ){
            string9 += i + ' ';
        }
        output9.innerHTML = string9;
        reset();
    }else if(num2 > num1){
        for(let i = num1; i<=num2; i++ ){
            string9 += i + ' ';
        }
        output9.innerHTML = string9;
        reset();
    }else{
        string9 = "You've entered two equal numbers"
        output9.innerHTML = string9;
        reset();
    }
}

function reset(){
    //reset
    input_field91.value = '';
    input_field92.value = '';
    string9 = '';
}
document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let output10 = document.querySelector('.out-10')
let string10 = '';

function t10() {
    for(let i=1950; i<=2000; i=i+2){
        string10 += i + " ";
    }
    output10.innerHTML = string10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two

let divs = document.querySelectorAll('.div-11');
let output11 = document.querySelector('.out-11')
let string11 = '';

function t11() {
    for(let i=0; i<divs.length; i++){
        string11 += divs[i].innerHTML + ' ';
    }
    output11.innerHTML = string11
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let divs2 = document.querySelectorAll('.div-12');

function t12() {
    for(let i=0; i<divs2.length; i++){
        divs2[i].style.background = 'orange';
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let all_inputs = document.querySelectorAll('.i-13');

function t13() {
    for(let i=0; i<all_inputs.length; i++){
        all_inputs[i].value = i+1;
        console.log(`Value of div ${i + 1} = ${i + 1}`);
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let radios = document.querySelectorAll('.i-14');
let output14 = document.querySelector('.out-14');

function t14() {
    for(let i=0; i<radios.length; i++){
        if(radios[i].checked){
            output14.innerHTML = radios[i].value;
        }
    }
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл. Разделитель пробел.
// Подсказка (10 - i) + ' ' + i
let output15 = document.querySelector('.out-15');
let string15 = '';
function t15() {
    for(let i=0; i<=10; i++){
        string15 += (10 - i) + ' ' + i + ' ';
    }
    output15.innerHTML = string15
}

document.querySelector('.b-15').onclick = t15;
