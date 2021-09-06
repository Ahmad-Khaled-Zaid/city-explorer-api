'use strict'
const { response } = require('express')
const express = require('express') // require the express package
const { request } = require('http')
const app = express() // initialize your express app instance
 const weather=require('./Weather/weather.json')
// a server endpoint 
app.get('/', // our endpoint name
 function (request, response) { // callback function of what we should do with our request
  response.send('Hello World') // our endpoint function response
})
app.get('/get-weather',(request,response)=>{
  response.json(weather)
  console.log(request.query);
  if (type) {
    const returnArray = weather.filter((item) => {
      return item.type === type;
    });

    if (returnArray.length) {
      response.json(returnArray);
    } else {
      response.send('no data found')
    }
  } else {
    response.json(weather);
  }
})

})
app.listen(3001) // kick start the express server to work
