'use strict'


const express = require('express'),
      app = express(),
      port = (process.env.PORT || 3000),
      morgan = require('morgan'),
      Sensors = require('./Routes/Sensor.Route');


app.set('port',port);

app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}))

//

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.json())

app.use('/',Sensors)

app.listen(app.get('port'),()=>{
	console.log('Server running in port : ',app.get('port'))
})
