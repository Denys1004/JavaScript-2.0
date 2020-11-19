
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    let val = document.querySelector('.i-1').value
    document.querySelector('.out-1').textContent = val;
    return val;
}

document.querySelector('.i-1').oninput = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').textContent = e.charCode;
    return e.charCode;
}

document.querySelector('.i-2').onkeypress = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    if(e.keyCode > 47 && e.keyCode < 58 || e.charCode > 47 && e.charCode < 58){
        document.querySelector('.out-3').textContent = 'false';
    }else{
        document.querySelector('.out-3').textContent = 'true';
    }
}

document.querySelector('.i-3').onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
let out_small ='';

function t4(e) {
    let keycode;

    if(e.shiftKey == true) {     // capital letter was pressed
        keycode = e.keyCode + 32;
        let a = String.fromCharCode(keycode)
        out_small += `${a} `
    }else {
        keycode = e.keyCode;
        let b = String.fromCharCode(keycode)
        out_small += `${b} `
    }
    document.querySelector('.out-4').textContent = out_small;
}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let out_big ='';

function t5(e) {
    let keycode;

    if(e.shiftKey == true) {     // capital letter was pressed
        keycode = e.keyCode;
        let a = String.fromCharCode(keycode)
        out_big += `${a} `
    }else {
        keycode = e.keyCode - 32;
        let b = String.fromCharCode(keycode)
        out_big += `${b} `
    }
    document.querySelector('.out-5').textContent = out_big;
}

document.querySelector('.i-5').onkeypress = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let out = '';

function t6(e) {
    let keycode;
    if(e.shiftKey == true) {     // capital letter was pressed
        out = out;
    }else {
        keycode = e.keyCode ;
        let b = String.fromCharCode(keycode)
        out += `${b} `
    }
    document.querySelector('.out-6').textContent = out;
}

document.querySelector('.i-6').onkeypress = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
function get_random_num(num1, num2) {
    return Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
} 
let out_random = "";

function t7(e) {
    const a7 = []; 
    let num = get_random_num(44, 124); // Поскольку масссив  а7 пустой, я получаю рандомный номер здесь
    out_random += String.fromCharCode(num);

    document.querySelector('.out-7').textContent = out_random
}

document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let changedInput = '';
function t8(e) {
    const a = {
        'i': 1,
        'o': 0,
        'l':7
    }
    if(e.key in a){
        changedInput += a[e.key];
    }else{
        changedInput += e.key;
    }

    document.querySelector('.out-8').textContent = changedInput;
}

document.querySelector('.i-8').onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let arrow_down_num = 0;

function t9(e) {
    if(e.code === "ArrowDown"){
        arrow_down_num += 1;
    }
    document.querySelector('.out-9').textContent = arrow_down_num;
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let img_width = 75;
let img_heigh = 75;

function t10(e) {
    let img = document.querySelector('.div-10 img');

    switch (e.keyCode) {
        case 37:
            console.log(e.keyCode);
            img_width ++;
            img.style.width = `${img_width}px`
        case 39:
            img_width ++;
            img.style.width = `${img_width}px`
        case 38:
            img_heigh++;
            img.style.height = `${img_heigh}px`
        case 40:
            img_heigh++;
            img.style.height = `${img_heigh}px`
    }
}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(e) {
    let div_data;
    let needed_div;
    console.log(e);


    if(e.code == 'AltLeft' || e.code == 'AltRight' ){
        div_data= e.code;
        needed_div= document.querySelectorAll(`[data='${div_data}']`)
        needed_div[0].classList.add('active_btn')
        return true
    }

    if(e.code == 'ShiftLeft' || e.code == 'ShiftRight' ){
        div_data= e.code;
        needed_div= document.querySelectorAll(`[data='${div_data}']`)
        needed_div[0].classList.add('active_btn')
        return true
    }

    if(e.keyCode == 9){
        e.preventDefault();
    }
    div_data = e.keyCode;
    needed_div = document.querySelectorAll(`[data='${div_data}']`)
    needed_div[0].classList.add('active_btn')
}

function t11_2(e) {
    let div_data;
    let needed_div; 

    if(e.code == 'AltLeft' || e.code == 'AltRight' ){
        div_data= e.code;
        needed_div= document.querySelectorAll(`[data='${div_data}']`)
        needed_div[0].classList.remove('active_btn')
        return true
    }

    if(e.code == 'ShiftLeft' || e.code == 'ShiftRight' ){
        div_data= e.code;
        needed_div= document.querySelectorAll(`[data='${div_data}']`)
        needed_div[0].classList.remove('active_btn')
        return true
    }

    div_data = e.keyCode;
    needed_div = document.querySelectorAll(`[data='${div_data}']`)
    needed_div[0].classList.remove('active_btn')
}

document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t11_2;

