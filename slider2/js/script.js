// slider
let slide = document.querySelector('#slide');
document.querySelector('#btn_left').onclick = () => {
    slide.scrollLeft -= document.documentElement.clientWidth;
}
document.querySelector('#btn_right').onclick = () => {
    slide.scrollLeft += document.documentElement.clientWidth;
}

// open file upload window when click on slider Add image icon
document.getElementById('add_img_icon').addEventListener('click', openDialog);
function openDialog() {
    document.getElementById('file_input').click();
}

let all_img = document.querySelectorAll('.slide-single');
all_img  = Array.prototype.slice.call(all_img );
let photoIndex = 0;

// image clicked - show Gallery
for(img of all_img){
    img.addEventListener('click', function(){
        let n = all_img.indexOf(this); 
        showGallery(n, all_img);
    });
}
function showGallery(index, imgArray){
    disableScrolling();
    document.querySelector('#photoGallery').style.display = 'block';
    document.querySelector('#photoGallery_photo').style.background = `url(${imgArray[index].src}) no-repeat center center/contain`;
    photoIndex = index;
}

// switch photo
document.getElementById('photoGallery_btn_left').addEventListener('click', switchPhoto)
document.getElementById('photoGallery_btn_right').addEventListener('click', switchPhoto)
function switchPhoto(){
    if(this.getAttribute('direction') == 'left' && photoIndex !=0){
        document.querySelector('#photoGallery_photo').style.background = `url(${all_img[photoIndex-1].src}) no-repeat center center/contain`;
        photoIndex--;
    }else if(this.getAttribute('direction') == 'right' && photoIndex !=all_img.length-1){
        document.querySelector('#photoGallery_photo').style.background = `url(${all_img[photoIndex+1].src}) no-repeat center center/contain`;
        photoIndex++;
    }
}

// close Gallery
document.getElementById('photoGallery_btn_close').onclick = () =>{
    document.querySelector('#photoGallery').style.display = 'none';
    enableScrolling();
}

// scroll at the moment when Gallery is open
function disableScrolling(){
    document.querySelector('body').classList.add('stop-scrolling');
}
function enableScrolling(){
    document.querySelector('body').classList.remove('stop-scrolling');
}