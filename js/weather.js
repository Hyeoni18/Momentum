const API_KEY = "1a88b11b99dde348fe0c8d5fa589c09e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const current = document.querySelector(".header span:first-child");
        current.innerText = `${data.name} :: ${data.weather[0].main} , ${data.main.temp}`;
    });
}

const hopeUrl = `https://api.openweathermap.org/data/2.5/weather?lat=25.04776&lon=121.53185&appid=${API_KEY}&units=metric`;
fetch(hopeUrl).then(response => response.json()).then(data => {
    const hope = document.querySelector(".header span:last-child");
    hope.innerText = `${data.name} :: ${data.weather[0].main} , ${data.main.temp}`;
});

function onGeoError() {
        alert("Can't find you, No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);