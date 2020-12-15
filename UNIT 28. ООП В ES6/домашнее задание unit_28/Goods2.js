class Goods2 extends Goods {
    constructor(name, amount, img, count, sale){
        super(name, amount, img, count)
        this.sale = false;
    }
    draw(elem, item_price, image_src, isSale){
        let out = '';
        let item = document.createElement('div');
        item.classList.add(`${this.name}`);
        document.querySelector(`.${elem}`).appendChild(item);
        out += `<h3>${this.name} $${item_price},00</h3>`;
        out += `<img src="img/${image_src}.png" alt="${image_src}">`;
        if(isSale == 'true'){
            out += `<h1>ON SALE!</h1>`;
        }
        item.innerHTML = out;
    }
}