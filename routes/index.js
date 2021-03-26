const express = require('express')
const router = express.Router()
const config = require('../config')
const Gallery=require('../models/gallery');

router.use((req, res, next) => {
  res.locals = config
  next()
})
//router for index page
router.get('/', (req, res) => {
  res.render('pages/index')
})
//router for admin page
router.get('/admin', (req, res) => {
  res.render('pages/admin')
})
//router for subscribe page
router.get('/subscribe', (req, res) => {
  res.render('pages/subscribe')
})
//router for team page
router.get('/team', (req, res) => {
  res.render('pages/team')
})
//router for gallery page
router.get('/menu', (req, res) => {
  res.render('pages/gallery')
})

// single image render
router.get('/gallery/:id', async(req,res)=>{
  const image = await Gallery.findOne({id: req.params.id});
  res.render('pages/singlemenu', {pageTitle: image.menuTitle, image})
})
//router for page not found page
router.get('/404', (req, res) => {
  res.render('pages/404')
})

module.exports = router;