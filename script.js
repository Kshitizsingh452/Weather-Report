// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherAPI = {
  key: "7266d3292fe8c24e52d6ef8ea382a4e1",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

// const searchInputBox = document.getElementById("input-box");
// searchInputBox.addEventListener('keypress',(event) =>{
//     if(event.keycode==13){
//     console.log(searchInputBox.value);
//        weather_report(searchInputBox.value);
//     }
// });

const searchForm = document.getElementById("search");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInputBox = document.getElementById("input-box");
  console.log(searchInputBox.value);
  weather_report(searchInputBox.value);
  return false;
});

// const searchCity = (event) => {
//   event.preventDefault();
//   const searchInputBox = document.getElementById("input-box");
//   console.log(searchInputBox.value);
//   weather_report(searchInputBox.value);
//   return false;
// };

function weather_report(city) {
  fetch(`${weatherAPI.baseUrl}?q=${city}&appid=${weatherAPI.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then((json) => show(json));
}

function show(weather) {
  console.log(weather);
  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temp = document.getElementById("temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let min_max = document.getElementById("min-max");
  min_max.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/  ${Math.ceil(weather.main.temp_max)}&deg;C(max) `;
  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;
  let date = document.getElementById("date");
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);

  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url(./images/clear.webp)";
  } else if (weatherType.innerText == "Clouds") {
    document.body.style.backgroundImage = "url(./images/clody.webp)";
  } else if (weatherType.textContent == "Rain") {
    document.body.style.backgroundImage = "url(./images/rain.webp)";
  } else if (weatherType.textContent == "Snow") {
    document.body.style.backgroundImage = "url(./images/snow.webp)";
  } else if (weatherType.textContent == "Thunderstrom") {
    document.body.style.backgroundImage = "url(./images/thunder.webp)";
  }
}

function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedenesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = dateArg.getFullear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date}, ${month},${day},${year}`;
}
