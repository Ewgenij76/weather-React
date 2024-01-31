import React from 'react';
import './App.css';

function App() {
  return (
    <div class="container">
        <div class="search-box">
            <button class="fa-solid fa-location-dot"> </button>
            <input type="text" id="input" placeholder="Поиск города" autofocus/>
            <button class="fa-solid fa-magnifying-glass" id="btn-search"></button>
            <button FontAwesomeIcon icon="fa-solid fa-rotate" id="btn-refresh"></button>
        </div>

        <div class="not-found">
            <img src="images/404.png"/>
            <p>Oops! Invalid location :/</p>
        </div>
      <div class="weather-box">
            <img src=""/>
            <p class="temperature"></p>
            <p class="description"></p>
        </div>

        <div class="weather-details">
            <div class="humidity">
                <icon FontAwesomeIcon id="fa-solid fa-water"></icon>
                <div class="text">
                    <span></span>
                    <p>Влажность</p>
                </div>
            </div>
            <div class="wind">
                <icon FontAwesomeIcon id="fa-solid fa-wind"></icon>
                <div class="text">
                    <span></span>
                    <p>Ветер</p>
                </div>
            </div>
        </div>

       <script src="https://kit.fontawesome.com/7c8801c017.js" crossorigin="anonymous"></script>
        <script src="index.js"></script>
    </div>
    );
}

export default App;
