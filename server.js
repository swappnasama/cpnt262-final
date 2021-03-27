const express = require('express')
const index = require('./routes')
const mongoose = require('./_connection.js') 
const Gallery=require('./models/gallery');
const Team=require('./models/team');
const Subscriber = require('./models/subscriber')

const app = express()

// Set ejs as view engine
app.set('view engine','ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// Requiring our Routes
app.use('/',index);

// POST for subscriber data
app.post('/admin', (req,res) => {
  Subscriber.insertMany(req.body)
    .then (result => {
      res.redirect('/')
    })
    .catch(error => console.error(error))
})

// JSON Endpoints
app.get('/gallery', (req,res)=>{
  Gallery.find((err,galleries)=>{
    res.json(galleries);    
  });  
});

app.get('/member', (req,res)=>{
  Team.find((err,teams)=>{
    res.json(teams);    
  });  
});

app.get('/admin', (req,res) => {
  Subscriber.find((err,subscribers) => {
    res.json(subscribers);
  })
})

// 404 Page Not Found
app.use(function(req,res){
  res.status(404);
  res.redirect('/404');  
});


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})