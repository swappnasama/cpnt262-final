const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    id:             Number,
    menuItem:       String,    
    description:    String,
    price:          Number,
    imageFileName:  String,
    width:          Number,
    height:         Number,
    attribution:  {
      source:     String,     
      credit:     String,
      url:        String
    } 
  }
);

module.exports = mongoose.model('Menuitem', gallerySchema);