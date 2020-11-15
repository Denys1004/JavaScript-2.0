    // To create new set:
    let a = new Set();

    // How to add element to the set:
    a.add(1);
    a.add('Hello');
    a.add('1');

    // clear set (empty set):
    a.clear();

    // How to delete element from the set
    a.delete('Hello'); // удаляет +++

    // to find out how many elements in set (length of the set):
    console.log(a.size); // кол-во элементов

    // to check if element in set (to find if specific element in set):
    console.log(a.has(2));  // true
    console.log(a.has('2'));  // false


    // classic For loop NOT working: for (let i = 0 ; i< a.size; i++)
    // for in loop NOT working: for (let i in a) 

    // loop through the set ONLY with for of loop:
    for (let item of a) {
        console.log(item);
    }


// how to use set:
    // lets say we have big array, and we need unique elements
    let arr = [1, 2, 3, 1, 4, 5, 'hello', 5, 1, 3];
    // we can make new set from array with unique elements
    let b = new Set(arr); // !!!!!
    console.log(b);
    console.log(b.size);

    // how to convert set into array
    let bArr = Array.from(b);
    console.log(bArr);
    console.log(bArr[2]);