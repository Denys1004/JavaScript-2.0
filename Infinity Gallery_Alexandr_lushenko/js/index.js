// INFINITY GALLERY
let images = document.querySelectorAll('#inf_gallery img');
let current = 0;
function slider(){ 
    for(let i=0; i<images.length; i++){ // должна скрывать все картинки
        images[i].classList.add('opacity0');
    }
    images[current].classList.remove('opacity0') // а текущей  (нулевой) картинке удалять opacity0
}
slider() // чтобы убрать торможение при первом клике (иначе надо два раза клинкнуть первый раз что бы изменилась картинка)
document.querySelector('#btn_to_left').onclick = () =>{
    if(current - 1 == -1){
        current = images.length-1;
    }else{
        current--;
    }
    slider()
};
document.querySelector('#btn_to_right').onclick = () => {
    if(current+1 == images.length){
        current = 0;
    }else{
        current++;
    }
    slider()
};