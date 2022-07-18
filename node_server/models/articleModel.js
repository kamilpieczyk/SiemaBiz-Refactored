const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  mainImage: String,
  title: String,
  author: String,
  date: String,
  introduction: String,
  sections: Array,
  category: String,
});

module.exports = mongoose.model('article', articleSchema);
