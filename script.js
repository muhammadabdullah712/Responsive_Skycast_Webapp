const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7454676971msh43895afc5098bc6p1f2f05jsnf8d6c66d6382",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const capitalCities = [
  "Islamabad",
  "Delhi",
  "Washington",
  "London",
  "Istanbul",
  "Montreal",
];

const getWeather = (city, prefix, cityNameElement) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      console.log(data);

      document.getElementById(`${prefix}Cloud`).innerHTML = data.cloud_pct;
      document.getElementById(`${prefix}Temp`).innerHTML = data.temp;
      document.getElementById(`${prefix}FeelsLike`).innerHTML = data.feels_like;
      document.getElementById(`${prefix}MinTemp`).innerHTML = data.min_temp;
      document.getElementById(`${prefix}MaxTemp`).innerHTML = data.max_temp;
      document.getElementById(`${prefix}Humidity`).innerHTML = data.humidity;
      document.getElementById(`${prefix}WindSpeed`).innerHTML = data.wind_speed;
      document.getElementById(`${prefix}Sunrise`).innerHTML = data.sunrise;
      document.getElementById(`${prefix}Sunset`).innerHTML = data.sunset;
    })
    .catch((error) => console.error("Fetch error:", error));
};

const fetchAndDisplayCapitalsWeather = () => {
  capitalCities.forEach((city) => {
    getWeather(city, city.toLowerCase(), null, null);
  });
};

fetchAndDisplayCapitalsWeather();

const getweather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      console.log(data);

      cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      min_temp.innerHTML = data.min_temp;
      humidity.innerHTML = data.humidity;
      humidity2.innerHTML = data.humidity;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
    })
    .catch((error) => console.error("Fetch error:", error));
};
Submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});
getweather("Khanewal");
