document.querySelector('.block-1').addEventListener("touchstart", myTouch);
document.querySelector('.block-1').addEventListener("touchend", myTouchEnd);
document.querySelector('.block-2').addEventListener("touchmove", myTouchMove);

function myTouch(event) {
    console.log(event);
    console.log('touch');
    // to see how many touches were made ( сколько пальцев сработало )
    document.querySelector('.out-1').innerHTML = event.touches.length;  // 
    document.querySelector('.out-2').innerHTML += 'work ';
}

function myTouchEnd(event) {
    document.querySelector('.out-3').innerHTML += 'end';
}

function myTouchMove(event) {
    event.preventDefault();
    console.log(event);
    document.querySelector('.out-2').innerHTML += 'move ';
    return false;
}
// to see what event were taken place you cancheck by e.type

