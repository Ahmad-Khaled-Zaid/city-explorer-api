'use strict';
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const PORT = process.env.PORT || 8765;


const weather = require('./Weather/weather.json')
app.get('/',function (request, response) {
  response.send('Hello From the other Sidee')
  })

  class Forecast {
    constructor(weatherDiscription, date) {
      this.weatherDiscription = weatherDiscription;
      this.date = date;
    }
  }
 
  app.get("/weather", (request, response) => {
  
    
    const lon = request.query.lon;
    const city_name = request.query.city_name;
    const lat = request.query.lat;
   
  
    if (city_name) {
      const returnArray = weather.find((item) => {
        return item.city_name.toLowerCase() === city_name;
      });
      let dataArr=returnArray.data.map((element) => {
        return new Forecast(
          ` Low of ${element.low_temp}, high of ${element.high_temp} with ${element.weather.weatherDiscription} `,
          ` ${element.datetime}`
        );
      });
  
      if (dataArr.length) {
        response.json(dataArr);
      } else {
        response.send("error: Something went wrong.");
      }
    } else {
      response.json(weather);
    }
  });
    

app.listen(PORT, () => {
  console.log(`${PORT}`);
});
