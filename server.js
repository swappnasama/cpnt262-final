const express = require('express')
const index = require('./routes')
const mongoose = require('./_connection.js') 
const Gallery=require('./models/gallery');

const app = express()
app.set('view engine','ejs')

app.use(express.static('./public'));

app.use('/',index);

app.get('/gallery', (req,res)=>{
  Gallery.find((err,galleries)=>{
    res.json(galleries);
    
  });
  
});

app.use(function(req,res){
  res.status(404);
  res.redirect('/404');
  
});


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})