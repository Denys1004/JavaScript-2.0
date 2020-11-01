//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
let out1 = document.querySelector('.out-1')
let str1 = '';
let i1= 1;

function t1() {
    while(i1<=50){
        str1 += i1 + ' ';
        i1++
    }
    out1.textContent = str1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.
let out2 = document.querySelector('.out-2')
let str2 = '';
let i2= 2;

function t2() {
    while(i2<=122){
        str2 += i2 + ' ';
        i2 = i2 + 2;
    }
    out2.textContent = str2;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.
let out3 = document.querySelector('.out-3')
let str3 = '';
let i3= 25;

function t3() {
    while(i3>=7){
        str3 += i3 + ' ';
        i3--;
    }
    out3.textContent = str3;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.
let out4 = document.querySelector('.out-4')
let str4 = '';
let i4= 77;

function t4() {
    while(i4>=35){
        str4 += i4 + '_';
        i4=i4-3;
    }
    out4.textContent = str4;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.
let out5 = document.querySelector('.out-5')
let str5 = '';
let i5= 1;

function t5() {
    while(i5<=17){
        if(i5%2==0){
            str5 += i5 + '_**';
        }else{
            str5 += i5 + '_*';
        }
        i5++;
    }
    out5.textContent = str5;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.
let input_field6 = document.querySelector('.i-6');
let out6 = document.querySelector('.out-6')
let str6 = '';
let i6= 0;

function t6() {
    while(i6<+input_field6.value){
        str6 += '****** <br>';
        i6++;
    }
    out6.innerHTML = str6;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

let input_field7 = document.querySelector('.i-7');
let out7 = document.querySelector('.out-7');
let str7 = '';
let i7;

function t7() {
    i7 = +input_field7.value;
    while(i7>=0){
        str7 += i7 + " ";
        i7--;
    }
    out7.innerHTML = str7;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.
let input_field81 = document.querySelector('.i-81');
let input_field82 = document.querySelector('.i-82');
let out8 = document.querySelector('.out-8');
let str8 = '';
let num81;
let num82;

function t8() {
    num81 = +input_field81.value;
    num82 = +input_field82.value;
    while(num81<=num82){
        str8 += num81 + " ";
        num81++;
    }
    out8.innerHTML = str8;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.
let input_field91 = document.querySelector('.i-91');
let input_field92 = document.querySelector('.i-92');
let out9 = document.querySelector('.out-9');
let str9 = '';
let num91;
let num92;

function t9() {
    num91 = +input_field91.value;
    num92 = +input_field92.value;
    if(num91 > num92){
        while(num92<=num91){
            str9 += num92 + " ";
            num92++;
        }
    }else if(num92 > num91){
        while(num91<=num92){
            str9 += num91 + " ";
            num91++;
        }
    }
    out9.textContent = str9;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).
let out10 = document.querySelector('.out-10');
let str10 = '';
let i10 = 1950;

function t10() {
    while(i10 <=2000){
        str10 += i10 + ' ';
        i10 = i10+2;
    }
    out10.textContent = str10;
}

document.querySelector('.b-10').onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two
let alldivs = document.querySelectorAll('.div-11');
let out11 = document.querySelector('.out-11');
let str11 = '';
let num11 = 0;

function t11() {
    while(num11<alldivs.length){
        str11 += alldivs[num11].innerHTML;
        str11 += ' ';
        num11++;
    }
    out11.innerHTML = str11;

}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’
let all12divs = document.querySelectorAll('.div-12');
let str12 = '';
let num12 = 0;

function t12() {
    while(num12<all12divs.length){
        all12divs[num12].style.background = 'orange';
        num12++;
    }
}

document.querySelector('.b-12').onclick = t12;

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let allInputs13 = document.querySelectorAll('.i-13');
let i13 = 0;

function t13() {
    while(i13<allInputs13.length){
        allInputs13[i13].value = i13+1;
        i13++;
    }
}

document.querySelector('.b-13').onclick = t13;

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let allradios = document.querySelectorAll('.i-14');
let out14 = document.querySelector('.out-14')
let str14='';
let i14 = 0;

function t14() {
    while(i14<allradios.length){
        if(allradios[i14].checked){
            str14 += allradios[i14].value;
        }
        i14++;
    }
    out14.textContent = str14;
}

document.querySelector('.b-14').onclick = t14;

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.
let out15 = document.querySelector('.out-15')
let i15 = 0;
let str15 = '';

function t15() {
    while(i15<=10){
        str15 += (10 - i15) + ' ' + i15 + ' ';
        i15++
    }
    out15.textContent = str15;
}

document.querySelector('.b-15').onclick = t15;
