export const getWeather= async(city)=>{
    
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city=='ош'|| city =='Ош'? 'osh': city}&appid=8efba953348d1defe97ff57a2c1a01f7&lang=ru&units=metric`
        )

         return await response.json();
    }catch(error){
        console.warn(error)
        
        
    }
}