const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    id:           Number,
    name:         String,    
    bio:          String,
    profilePic:   String,
    github:       String   
  }
);

module.exports = mongoose.model('Member', memberSchema);