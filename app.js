

const apikey = '2574ac78079b0eed8cc0d844891e850c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const search = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weathericon = document.querySelector('.weather-icon')

async function checkwheather(city){

    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    var data = await response.json();
    console.log(data)

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)  + '°c'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.Wind').innerHTML = data.wind.speed + 'km/h'

    if(data.weather[0].main == 'Clouds'){
        weathericon.src = './clouds.png';
    }
    else if(data.weather[0].main == 'Clear'){
        weathericon.src = './clear.png';
    }

    else if(data.weather[0].main == 'Rain'){
        weathericon.src = './rain.png';
    }

    else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = './drizzle.png';
    }

    else if(data.weather[0].main == 'Mist'){
        weathericon.src = './mist.png';
    }

    else if(data.weather[0].main == 'Snow'){
        weathericon.src = './snow.png';
    }

}

searchbtn.addEventListener('click', ()=>{

    checkwheather(search.value)
})

