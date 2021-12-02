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

function show(json) {
  console.log(json);
  let city=document.getElementById('city');
  city.innerText=`${weather.name},${weather.sys.country}`;

  let temp=document.getElementById('temp');
  temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;
}


