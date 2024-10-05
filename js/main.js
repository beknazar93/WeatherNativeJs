import { getWeather } from "./api.js";
let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let card = document.querySelector(".card");
const app = async(city)=>{
    const weather = await getWeather(city || "Бишкек");
    console.log(weather)
    card.innerHTML=`    
        <h2 class="card-city">${weather.name} <span>${weather.sys.country}</span></h2>

        <div class="card-weather">
            <div class="card-value">${(weather.main.temp).toFixed(0,1)}<sup>°c</sup></div>
            <img class="card-img" src=${` https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather">
        </div>

        <div class="card-description">${weather.weather[0].description}</div>
    `
}
app()
btn.addEventListener("click",  function(){
    let inputValue = input.value
    if(!inputValue || inputValue===undefined){
         alert('вы не правельно ввели название города')
         input.value=""
    }else{
         app(inputValue)
        input.value=""
    } 
   })

input.addEventListener('keyup', function(e){
    let inputValue = input.value
        if(e.key === 'Enter'){
            app(inputValue)
            input.value=""
        }      
})

