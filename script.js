
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherAPI={
key:"7266d3292fe8c24e52d6ef8ea382a4e1",
baseUrl:"https://api.openweathermap.org/data/2.5/weather?"
}

const searchInputBox=document.getElementById('input-box');
searchInputBox.addEventListener('keypress',(event) =>{
    if(event.keyCode==13){
    console.log(searchInputBox.value);
       
    }
});





