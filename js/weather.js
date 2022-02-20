const API_KEY = "025a6a2288c40552fc9872b3568f71e5"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.getElementById("weather");
        const weather = weatherContainer.firstElementChild;
        console.dir(weather);
        const city = weatherContainer.children[1];
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}°`;
    });
}

function onGeoError() {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);