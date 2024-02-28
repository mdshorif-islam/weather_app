const apiKey = "8c1cdae51f294825c041a70e2cc6b9bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const watherIcon = document.querySelector(".wather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed +  " km/h";

    if(data.weather[0].main == "Clouds"){
        watherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        watherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        watherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        watherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        watherIcon.src = "images/mist.png";
    }
    
    document.querySelector(".weather").style.display = "block"

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

