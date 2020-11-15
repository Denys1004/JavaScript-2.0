    // How to multiply each element of the array
    let a = [4, 5, 12, 200, 1, 0, -2];

    let b = a.map( (item, index) => {
        return item * 5;
    });
    // OR YOY CAN WRITE SHORTER ARROW FUNCTION
    let b = a.map( item => item * 5 );


let c = a.filter( (item, index) => { 
    if (item > 0) {
        return true;
    }
});
console.log(c);

