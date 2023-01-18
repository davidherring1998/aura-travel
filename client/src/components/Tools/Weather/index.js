import React from "react";
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city/latlon/30.438/-89.1028',
  headers: {
    'X-RapidAPI-Key': '5ed129b857msh271befd335f319bp12cc22jsnd7eb320e9d54',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const Weather = () => {
    return (
        <div>
            <h1>The Current Weather is...</h1>
            {Weather.map((data) => {
                return(
                    <li className="weatherdata" key={data.id}>{response.data}</li>
                )
            })}
        </div>
        
    )
  };
  

export default Weather; 