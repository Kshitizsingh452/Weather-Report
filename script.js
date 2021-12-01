const api={
    key:"7266d3292fe8c24e52d6ef8ea382a4e1",
    baseurl:"https://home.openweathermap.org/api_keys",


}
const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
function setQuery()