    let out = '';
    for(let i=0; i<10; i++){
        if(i==6) continue;
        out += i + '<br>';
        // if(i==6) break;
    }
    document.querySelector('.out').innerHTML = out;