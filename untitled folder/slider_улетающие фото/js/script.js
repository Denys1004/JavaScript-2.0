

// УЛЕТАЮЩИЕ ФОТО
const flowingImages = ['gd_10.jpg', 'gd_2.jpg', 'gd_3.jpg', 'gd_4.jpg', 'gd_5.jpg', 'gd_6.jpg', 'gd_7.jpg', 'gd_9.jpg', 'gd_1.jpg']

let imgCount = flowingImages.length;
const div_flowing_photos = document.querySelector('.flowing_photos');
// Нужна функция которая будет создавать изображения и добавлять их на главную страницу
function createImg(){
    shuffleImages(flowingImages);
    for( let i=0; i<flowingImages.length; i++){
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.background = `url("./images/${flowingImages[i]}")`;
        card.style.backgroundSize = 'cover';
        // card.style.backgroundRepeat = 'no-repeat';
        card.style.transform = `rotate(${random_num(-20, 20)}deg) translate(${random_num(-50, 50)}px, ${random_num(-50, 50)}px)`;
        div_flowing_photos.append(card);
    }
}
function random_num(min, max) {
    let rand = min + Math.random() * (max +1 - min)
    return Math.floor(rand)
}
function shuffleImages(arr) {
    arr.sort(() => Math.random() - 0.5);
}

createImg();

div_flowing_photos.addEventListener('click', event => {
    if(event.target.classList.contains('card')){
        event.target.classList.add('fly_away');
        imgCount--;
    }
    if(imgCount == 0){
        all_yletevshue_images = document.querySelectorAll('.card');
        for(let i=0; i<all_yletevshue_images.length; i++){
            all_yletevshue_images[i].parentNode.removeChild(all_yletevshue_images[i]);
        }
        createImg();
        imgCount = flowingImages.length;
    }
})