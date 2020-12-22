const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const img1 = document.querySelector('#img1');

// Поскольку мы перемещаем картинку из зоны2 в зону1, для зоны1 мы должны написать событие:
zone1.ondragover = allowDrop;
function allowDrop(e){
    e.preventDefault();
}

img1.ondragstart = drag;
function drag(e){
    e.dataTransfer.setData('id', e.target.id) // в момент когда я начинаю тянуть обьект, я в dataTransfer помещаю новую запись с ключем id и значением e.target.id
} 

zone1.ondrop = drop;
function drop(e){
    let itemId = e.dataTransfer.getData('id'); // Здесь у нас есть доступ к id перетаскиваемого элемента
    console.log(itemId);
    e.target.append(document.getElementById(itemId))
}

// Что бы позволить перемещение обратно достаточно повесить следующие события на zone2:
zone2.ondragover = allowDrop;
zone2.ondrop = drop;