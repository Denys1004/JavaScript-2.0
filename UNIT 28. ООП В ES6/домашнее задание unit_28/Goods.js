class Goods {
    constructor(name, amount, img, count){
        this.name = name;
        this.amount = amount;
        this.img = img;
        this.count = count;
    }
    draw(elem, item_price, image_src){
        let out = '';
        let item = document.createElement('div');
        item.classList.add(`${this.name}`);
        document.querySelector(`.${elem}`).appendChild(item);
        out += `<h1>${this.name} $${item_price},00</h1>`;
        out += `<img src="img/${image_src}.png" alt="${image_src}">`;
        item.innerHTML = out;
    }
}