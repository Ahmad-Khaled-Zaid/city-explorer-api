

'use strict';
const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())

const weather = require('./data/weather.json')
app.get('/',
  function (request, response) {
    res.send('Hello World')
  })
class Forecast {
  constructor(date, description) {
    this.date = date;
    this.description = description;
  }

}



app.get('/get-weather', (request, response) => {

  let city_name = req.query.city_name;
  let lat = req.query.lat;
  let lon = req.query.lon;

  const newArr = weather.find((item) => {

    return (item.city_name.toLowerCase() === city_name.toLowerCase())
  });
  if (newArr) {
    let newArr = newArr.data.map((item) => {
      return new Forecast(item.data, item.weather.description);
    })
    res.json(newArr);
  }
  else {
    res.json('data not found')
  }

  app.listen(8080)