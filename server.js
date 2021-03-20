// Need some modules first
const path = require('path')
const express = require('express')

const app = express()

// Use the ejs view engine to properly render the ejs files into html
app.set('view engine', 'ejs')

// Set up some locals to fill out some info with less repetition
app.use((req, res, next) => {
  res.locals = {
    siteTitle: "Image Gallery Placeholder Title",
    copyright: "Nerd Squad 2021"
  }
})

// Some static middleware, want this to happen first
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.render('pages/index');
})

// If the above static file doesnt fire. respond with something.
app.get('/', (request, response) => {
  response.send('Oops! There should be something here!')
})

// Keep this block of code below all other request functions! If nothing is found at all!
app.use(function(request, response) {
  response.status(404);
  response.sendFile(__dirname + 'public/404.html');
})

// Define the port we want to use
const PORT = process.env.PORT || 3000

// Fire up that server!
app.listen(PORT, function(){
  console.log(`Things are happening on port ${PORT}`)
})