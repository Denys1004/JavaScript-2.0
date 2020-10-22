// task 17
let input17_info = document.querySelector('.input17')

let btn_17 = document.querySelector('#btn17')

btn_17.onclick = function (){
    let t = input17_info.value;
    t = parseInt(t);
    console.log(t); 
    // parseInt(44.5) => 44
    // parseInt(44bds) => 44
    // parseInt(44) => 44
}





// task 20
let first_name_info = document.querySelector('.first_name')
let last_name_info  = document.querySelector('.last_name')
let age_info  = document.querySelector('.age')
let profession_info = document.querySelector('.profession')

let btn_send = document.querySelector('#btn_send')

let output = document.querySelector('.user_info')

btn_send.onclick = function (){
    let first_name = first_name_info.value;
    let last_name = last_name_info.value;
    let age = age_info.value;
    let profession = profession_info.value;

    output.innerHTML = `Уважаемый ${first_name} ${last_name}, ваш возраст ${age} года, по професси вы ${profession}!`
}