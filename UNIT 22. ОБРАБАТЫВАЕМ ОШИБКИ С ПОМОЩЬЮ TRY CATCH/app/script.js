let a = 5;
a = a*2;
try {
    document.querySelector('.test').innerHTML = a; // ! Ошибка потомучто в html нет такого divа 
}
catch(err) {
    alert('ошибки!!!!');
    console.log(err); // можно посмотреть что за ошибка
    console.log('1');
}
finally {
    console.log('программа работает');
}

console.log(a);
