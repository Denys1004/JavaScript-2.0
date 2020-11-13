

function f1(){
    let city = document.querySelector('.i-1').value.toLowerCase();
    let[first, ...rest] = city;
    first = first.toUpperCase();
    city = first + rest.join('');

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cb838e1aa8759c6eecd167b249ca9962`)
    .then(function (resp) { return resp.json() }) 
    .then(function (data) { 
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        document.querySelector('.result .features p').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
}

document.querySelector('.b-1').onclick = f1;

// document.querySelector('.cont').onclick = function(){
//     document.querySelector('.result').className ='dissapear_anim';
// };



