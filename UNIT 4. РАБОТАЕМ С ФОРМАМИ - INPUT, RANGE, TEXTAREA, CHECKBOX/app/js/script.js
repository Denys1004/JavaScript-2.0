

    document.querySelector('#btn-2').onclick = (event) => {
        event.preventDefault();
        let form = document.querySelector('form');
        console.log(form);
        console.log(form.elements.two.value);
        console.log(form.elements.three.value);
    }