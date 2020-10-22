let a = 6;
let b = 'Hello';

console.log(a);

    // 1. we need to get all elements: 
    let inputIn = document.querySelector('.input-in');   // getting input element
    let btn = document.querySelector('button');   // getting button element
    let div = document.querySelector('.out'); 

    // 2. we need event    // 3. we need a function what to do
    btn.onclick = function (){
        // console.log(inputIn.value); // 4. attribute value is anything what user types in input
        //let b = +inputIn.value; // + transforms string into a number
        let b = inputIn.value; // + transforms string into a number
        div.innerHTML = b;
        // to clear input we need to reset input value to empty string 
        inputIn.value = '';
    }