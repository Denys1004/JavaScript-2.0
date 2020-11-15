// let arr = [4, 7, 9]

let paragraphs = document.getElementsByTagName('p');  // it will be HTMLCollection

// we can address each paragraph inside the for of loop:
for(let item of paragraphs){
    console.log(item);
}