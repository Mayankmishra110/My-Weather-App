const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c17a35802fmsh64a056a1ba77d2bp132224jsn7f4d0cdb885b",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    cityName.innerHTML = city;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options       //fetching APIs to extract data from rapid API
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    cloud_pct.innerHTML =  response.cloud_pct  
    temp.innerHTML =  response.temp
    temp5.innerHTML =  response.temp 

    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity5.innerHTML = response.humidity

    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed5.innerHTML = response.wind_speed

    // wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value)

})

getWeather("Delhi")

const getWeather1 = () => {
    // cityName.innerHTML = Delhi;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi" ,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct1.innerHTML =  response.cloud_pct  
    temp1.innerHTML =  response.temp 
    feels_like1.innerHTML = response.feels_like
    humidity1.innerHTML = response.humidity
    min_temp1.innerHTML = response.min_temp
    max_temp1.innerHTML = response.max_temp
    wind_speed1.innerHTML = response.wind_speed
//     wind_speed5.innerHTML = response.wind_speed

    wind_degrees1.innerHTML = response.wind_degrees
    sunrise1.innerHTML = response.sunrise
    sunset1.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}
getWeather1()


const getWeather2 = () => {
    // cityName.innerHTML = Delhi;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai" ,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct2.innerHTML =  response.cloud_pct  
    temp2.innerHTML =  response.temp 
    feels_like2.innerHTML = response.feels_like
    humidity2.innerHTML = response.humidity
    min_temp2.innerHTML = response.min_temp
    max_temp2.innerHTML = response.max_temp
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees2.innerHTML = response.wind_degrees
    sunrise2.innerHTML = response.sunrise
    sunset2.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}
getWeather2()



const getWeather3 = () => {
    // cityName.innerHTML = Delhi;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai" ,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct3.innerHTML =  response.cloud_pct  
    temp3.innerHTML =  response.temp 
    feels_like3.innerHTML = response.feels_like
    humidity3.innerHTML = response.humidity
    min_temp3.innerHTML = response.min_temp
    max_temp3.innerHTML = response.max_temp
    wind_speed3.innerHTML = response.wind_speed
    wind_degrees3.innerHTML = response.wind_degrees
    sunrise3.innerHTML = response.sunrise
    sunset3.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}
getWeather3()



const getWeather4 = () => {
    // cityName.innerHTML = Delhi;
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo" ,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pct4.innerHTML =  response.cloud_pct  
    temp4.innerHTML =  response.temp 
    feels_like4.innerHTML = response.feels_like
    humidity4.innerHTML = response.humidity
    min_temp4.innerHTML = response.min_temp
    max_temp4.innerHTML = response.max_temp
    wind_speed4.innerHTML = response.wind_speed
    wind_degrees4.innerHTML = response.wind_degrees
    sunrise4.innerHTML = response.sunrise
    sunset4.innerHTML = response.sunset
  })
  .catch((err) => console.error(err));
}
getWeather4()
