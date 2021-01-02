

// SLIDER POLOSA
document.getElementById('slider_polosa_left').onclick = slideLeft;
let allImages = document.querySelectorAll('.polosa_img');
let polosa = document.getElementById('polosa');
polosa.style.width = 600 * allImages.length + 'px';
let positionLeft = 0;


function slideLeft(){
    positionLeft -= 600;
    if(positionLeft < -(600*(allImages.length-1))){
        positionLeft = 0;
    }
    polosa.style.left = positionLeft + 'px';
}


