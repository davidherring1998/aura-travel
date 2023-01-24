import React, { useState, useEffect } from 'react';
import '../../../styles/Weather.css';
// import moment from 'moment';

export default function WeatherCard(){
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  useEffect(() => {
    // const fetchData = async () => {
    //   // navigator.geolocation.getCurrentPosition(function(position) {
    //     setLat(position.coords.latitude);
    //     setLong(position.coords.longitude);
    //   });

     fetch(`https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&APPID=225569ec657be8e17ac296ced3863d8d`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    
  //   fetchData();
   }, [city])
  const handleInput = (e) => {
    setCity(e.target.value);
    console.log(city);
    // const {city,value}=e.target;
    // setCity({
    //   [city]: value,
    // }
    // )
  }
  return (
    <div>
      <form><input
      type="text"
      name="city"
      id="city"
      placeholder="city"
      onChange={handleInput}
      /><button type="Submit">Submit</button>
      </form>
    </div>
    // <div className="Weather Box">
    //   {(typeof data.main != 'undefined') ? (
    //     <WeatherCard data={data}/>
    //   ): (
    //     <div><div className="main">
    //     <p className="header">{data.name}</p>
    //     <div className="flex">
    //       {/* <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p> */}
    //       <p className="description">{data.weather[0].main}</p>
    //     </div>
  
    //     <div className="flex">
    //       <p className="temp">Temprature: {data.main.temp} &deg;C</p>
    //       <p className="temp">Humidity: {data.main.humidity} %</p>
    //     </div>
  
    //     <div className="flex">
    //       <p className="sunrise-sunset">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
    //       <p className="sunrise-sunset">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
    //     </div>
      
    // </div></div>
    //   )}
      
    // </div>
  );
};

