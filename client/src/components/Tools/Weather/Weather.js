import React from "react";
import "../../../styles/Weather.css";


function Weather({ response, data }) {

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028',
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


  return (
    <div className="weatherContainer">
      {response.data}
    </div>

  )
};

export default Weather; 
