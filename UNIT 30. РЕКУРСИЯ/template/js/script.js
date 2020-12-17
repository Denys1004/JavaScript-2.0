let a = 1;
function rec(){
    if(a>10){
        return a;
    } 
    console.log(a);
    a++;
    rec();
}

rec();


// 1. Cначало давайте создадим функцию, которая просто будет двигать наш div
// let offset = 0;
// let div = document.querySelector('.test2');

// function move() {
//     offset = offset + 5;
//     div.style.left = `${offset}px`;
// }

// document.querySelector('button').onclick = move;

// Теперь давайте перепишем ее с помощью рекурсии
let offset = 0;
let div = document.querySelector('.test2');

function move() {
    offset = offset + 5;
    div.style.left = `${offset}px`;
    if(offset > 200){
        return true;
    }
    // Здесь нам необходима интервальная задержка
    setTimeout(move, 500);
}

document.querySelector('button').onclick = move;