const API_KEY = "4441921070b8b220c64b1537072ff106"

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    console.log("You live it", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:last-child")
        const city = document.querySelector("#weather span:first-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    console.log(url)
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);