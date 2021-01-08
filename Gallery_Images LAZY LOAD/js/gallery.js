document.addEventListener("DOMContentLoaded", function(event) {

    // SLIDING IMAGES GALLERY
    function sliding_images(){
        let slide = document.querySelector('#slide');
        document.querySelector('#btn_left').onclick = () => {
            slide.scrollLeft -= document.documentElement.clientWidth;
        }
        document.querySelector('#btn_right').onclick = () => {
            slide.scrollLeft += document.documentElement.clientWidth;
        }
    }

    // IMAGE GALLERY
    function image_gallery(){
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
            window.scrollTo(0, 0);
            disableScrolling();
            document.querySelector('#photoGallery').style.display = 'block';
            document.querySelector('#photoGallery_photo').style.background = `url(${imgArray[index].src}) no-repeat center center/contain`;
            photoIndex = index;
        }

        // switch photo
        let photoGallery_btn_left = document.getElementById('photoGallery_btn_left');
        let photoGallery_btn_right = document.getElementById('photoGallery_btn_right');
        photoGallery_btn_left.addEventListener('click', switchPhoto)
        photoGallery_btn_right.addEventListener('click', switchPhoto)
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
    }

    // LAZY LOAD
    let lazyImages = document.querySelectorAll('.lazy');
    const options = {
        root : null,
        rootMargin : '0px',
        threshold : 0.1
    }
    function handleImg(myImg, observer){
        myImg.forEach( myImgSingle => {
            if(myImgSingle.intersectionRatio > 0){
                loadImage(myImgSingle.target);
            }
        })
    }
    function loadImage(image){
        image.src = image.getAttribute('datasrc');
    }
    const observer = new IntersectionObserver(handleImg, options); 
    lazyImages.forEach(img => {
        observer.observe(img);
    })

    // WHERE TO RUN:
    let current_page = document.querySelector('title')
    console.log(current_page.textContent);
    if(current_page.textContent == "home"){
        image_gallery();
    }else if(current_page.textContent == "index"){
        image_gallery();
        sliding_images();
    }


})
