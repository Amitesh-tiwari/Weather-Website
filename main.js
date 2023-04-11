const cityname = document.getElementById("cityname")
const city_name = document.getElementById("city_name")
const submit_button = document.getElementById("submit_button");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");

const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityname.value;
    if(cityval === ""){
        city_name.innerText=`please write the name before search`;

    }
   
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}lucknow&units=metricappid=fdc7b970f0f1dc83311e7c2772809e9f`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData =[data]
            city_name.innerText= `{arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
        }catch{
            city_name.innerText=`please write the city name properly`;

        }
        
    }
}
submit_button.addEventListener("click",getInfo);