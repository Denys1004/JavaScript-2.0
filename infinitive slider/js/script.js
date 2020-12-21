// Идея в том чтобы создавать 2 изображения, и при работе слайдера сдвигать эти изображения,
// удалять левое из-е которое вышло за пределы блока, и создавать правое из-е
// и так бесконечно перебирая данные изображения

let slides = document.querySelectorAll('.slide-single')// 1. получаем все изображения
let imgSrcs = [];// 2. введем доп массив, в него мы будем получать src изображений

for(let i=0; i<slides.length; i++){// 3. запускаем цикл от нуля до длины slides
    imgSrcs[i] = slides[i].src; // 4. добавляем атрибут src в array
    slides[i].remove(); // 5. после того как мы вычитали из-е оно нам больше не нужно, удаляем его из страницы
}

// 6. После того как мы удалили катринки остался лишь массив путей imgSrcs к картинкам, с которым мы и будем работать
let index = 0;  // отвечает за шаг(какую картинку показывать в основном блоке)
let offset = 0; // отвечает за смещение изображения

function draw(){ // 7. функция создаст два необходимых изображения
    let img = document.createElement('img');
    img.src = imgSrcs[index]; // присваиваем src чтбы картинка была видна
    img.classList.add('slide-single');
    img.style.left = offset*300 + 'px'; // 300 это ширина картинки, эту ширину можно вынести в отдельную переменную и менять
    document.querySelector('#slide').appendChild(img)// инетгрируем картинку внутрь основного блока
    
    if(index+1 == imgSrcs.length){
        index = 0;
    }else{
        index++;
    }
    offset = 1;
}

//8. будет смещать основную картинку влево, и правую картинку, после чего опять надо удалить ненужные картинки и создать новые
function left(){ 
    document.onclick = null;// 9. ВАЖНО!!! пока не сработает таймаут нам необходимо запретить выполнение функции(отключить событие)
    let slides2 = document.querySelectorAll('.slide-single') // будед содержать видимые на данный момент картинки
    let offset2 = 0;
    for(let i=0; i<slides2.length; i++){
        slides2[i].style.left = offset2*300 - 300+ 'px'; // смещаем из-е влево
        offset2++;
    }
    // 9. после сдвига надо удалить из-е слева. 
    setTimeout(function(){
        slides2[0].remove();
        draw() // добавляем из-е справа
        document.onclick = left; // 10 а потом включить
    }, 1000);
}

draw();
draw();
document.onclick = left;