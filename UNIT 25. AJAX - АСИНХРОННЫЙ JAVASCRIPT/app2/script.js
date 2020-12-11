
    let banana = new XMLHttpRequest(); // 1
    let a = 0;

    banana.onreadystatechange = function () {       // 2
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this.responseText)
        }
    }
    banana.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true); // 4
    banana.send();  // 5

    function myFunction(data) { // 3
        a = data;
        console.log(data);
        // все манипуляции с а здесь, когда мы получили ответ с сервера (a = data)
    }
    // если ты пишешь здесь чтото связанное с а, то здесь а = 0 (ф внутри функции а = data)


    let banana2 = new XMLHttpRequest();      // 1
    banana2.onreadystatechange = function () {       // 2
        if (this.readyState == 4 && this.status == 200) {
            myFunction2(this.responseText)
        }
    }
    banana2.open("POST", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);      // 4

    //здесь ты по сути говоришь, что бы данный запрос отсылал данные как это делает обычная форма:
    banana2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 5
    banana2.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1') // здесь в указываешь какие параметры ты будешь передавать

    function myFunction2(data) {        // 3
        console.log('POSt');
        a = data;
        console.log(data);
    }