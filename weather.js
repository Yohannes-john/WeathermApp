const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getWeather(city) {
    var res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Ethiopia&appid=dea0910661d4de08f28c50ba7fcd245a&units=metric');
    if(res.status == 404){
        document.querySelector('.error').style.display = "block";
    }else {
        document.querySelector('.error').style.display = "none";
    }
    
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityp').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.winds').innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds"){
        image.src = "./image/Premium-Vector-Cloud-Icon-in-trendy-flat-style-isolated-on-blue--678313451.jpg"
    }else if(data.weather[0].main == "Clear"){
        image.src = "./image/Free-Clear-Button-Vector-Art-Download-2407-Clear-Button-Icons--1217383320.png"
    }else if(data.weather[0].main == "Rain"){
        image.src = "./image/Raining-Free-weather-icons-1160932451.png"
    }else if(data.weather[0].main == "Drizzle"){
        image.src = "./image/Drizzle-Icon-Style-6069956-Vector-Art-at-Vecteezy-541954310.jpg"
    }else if(data.weather[0].main == "Mist"){
        image.src = "./image/Mist-Cloud-Fog-Icon-Simple-Vector-Illustration-Stock-Vector-by--181377775.jpg"
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})