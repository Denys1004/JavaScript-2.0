    let gas = document.querySelectorAll('.gas');
    for (let i = 0; i < gas.length; i++) {
        gas[i].onclick = function () {
            let gallons = document.querySelector('.gallons').value;
            let amount = this.getAttribute('data');
            console.log(gallons * amount);
        }
    }

    // 1. Create element:
    let a = document.createElement('div');
    a.innerHTML = 'Hello!';
    a.classList.add('one');
    a.onclick = function () { // you can add function to this element
        alert('hello');
    }
    // 2. element created but it is not on the page yet!
    // 3. we can put it inside any existing element on the page:
    document.querySelector('.test').appendChild(a);



console.log(a);