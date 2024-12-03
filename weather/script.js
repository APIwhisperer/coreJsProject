const key = "4567824da6a59c05f289d049ece19c1a";
/**  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}  */

const button = document.getElementById("searchButton");
const inputValue = document.getElementById("search");
const temperature = document.querySelector(".temp");
const cityValue  = document.querySelector(".city");
const humidityPercentage = document.querySelector(".humidityPercentage");
const windSpeed = document.querySelector(".windSpeed");
const weatherImage = document.querySelector(".weather");
let city = 'delhi';


async function weathercall(){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
    const data = await response.json();
    console.log(data);
    temperature.innerHTML = Math.round(data.main.temp)+"°C";
    cityValue.innerHTML = data.name;
    humidityPercentage.innerHTML = data.main.humidity + "%";
    windSpeed.innerHTML = data.wind.speed + "Km/h";
    if(data.weather[0].main == 'clouds'){
        weatherImage.src = './images/clouds.png';
    }else if(data.weather[0].main == 'clear'){
        weatherImage.src = './images/clear.png';
    }else if(data.weather[0].main == 'mist'){
        weatherImage.src = './images/mist.png';
    }else if(data.weather[0].main == 'drizzle'){
        weatherImage.src = './images/drizzle.png';
    }else if(data.weather[0].main == 'rain'){
        weatherImage.src = './images/rain.png';
    }else if(data.weather[0].main == 'snow'){
        weatherImage.src = './images/snow.png';
    }
 
}

weathercall();
inputValue.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      button.click();
    }
  });
button.addEventListener("click", function(){
    city = inputValue.value;
    weathercall();
})
