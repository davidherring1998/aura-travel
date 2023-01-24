import { rewriteURIForGET } from '@apollo/client';
import React, { useState, useEffect, } from 'react';
import '../../../styles/Weather.css';
// import moment from 'moment';

export default function WeatherCard() {
  const num = 0;
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [test, setTest] =useState(1)
  useEffect(() => {
    

    fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=imperial&APPID=225569ec657be8e17ac296ced3863d8d`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });

  }, [test])


  const handleInput = (e) => {
    setCity(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTest(true)

  }


  return (
    <div className="weatherContainer">
      
      <div> <div className="main">
        <div className="header">Weather</div>
        <div className="input">
          Enter City Name:
          <form><input
            type="text"
            name="city"
            id="city"
            placeholder="city"
            onChange={handleInput}
          /><button type="Submit" className="inputBtn" onClick={handleFormSubmit}>Submit</button>
          </form>
        </div>
        <div className="flex">
          {/* <p className="description">The currrent weather is {data.weather[0].main} in {data.name} on {moment().format('dddd')}, <span>{moment().format('LL')}</span>.</p> */}

        </div>
        <div className="flex">
          {/* <p className="temp">Temprature: <p className="data">{data.main.temp}&deg;F</p></p> */}
          {/* <p className="temp">Humidity: <p className="data">{data.main.humidity} %</p></p> */}
          {/* <p className="temp">Wind Speed: <p className="data">{data.wind.speed} mph</p></p> */}
        </div>
        <div className="flex">
          {/* <p className="sunrise-sunset">Sunrise: <p className="data">{new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p></p> */}
          {/* <p className="sunrise-sunset">Sunset: <p className="data">{new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p></p> */}
        </div>
      </div>
      </div>

    </div>



  
  );
};

