'use strict'

const express = require('express'),
      app = express.Router();



app.get('/',(req,res)=>{
	res.json({'status':'online'})
})


module.exports = app