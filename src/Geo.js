import React from 'react';


const error404 = document.querySelector('.not-found');
const currentPosition = document.querySelector('.fa-location-dot');



currentPosition.addEventListener('click', () => {


    const inputLocation = document.getElementById('input');

    function success(pos) {
        var crd = pos.coords;
        const APIKey = 'e99d48709e3501205c995a3da9c6ecc0';

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&lang=ru&appid=${APIKey}`).then(response => response.json()).then(json => {

            if (json.cod === '404') {return
                container.style.height = '400px'
                weatherBox.style.display = 'none'
                weatherDetails.style.display = 'none'
                error404.style.display = 'block'
                error404.classList.add('fadeIn')
                };
            return <div class="search-box">
            <button class="fa-solid fa-location-dot"> </button>
            <input type="text" id="input" placeholder="Поиск города" autofocus/>
            <button class="fa-solid fa-magnifying-glass" id="btn-search"></button>
            <button class="fa fa-refresh" id="btn-refresh"></button>
            </div>
            },

            error404.style.display = 'none',
            error404.classList.remove('fadeIn'),

            const img = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');
            const location = document.querySelector('.search-box input');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}m/s`;
            location.innerHTML = `${json.name}`;

            inputLocation.placeholder = `${json.name}`;

            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
            container.style.height = '590px';




    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error);

export default Geo;
