const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  title: {
    type: String  
  },
    text: {
    type: String,
    required: true
  },
  text1:{
    type:String
  },
  text2:{
    type:String
  },
  text3:{
    type:String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
