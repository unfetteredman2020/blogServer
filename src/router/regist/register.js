const express = require('express');
const route = express.Router();
const db = require('../../db/index')
route.get('/',function(req,res,next){
  db.query('select * from user_info where user_id', function(ress,fieds){
    console.log(ress);
    res.send(ress)
  console.log('next');
  })
  
})

module.exports = route