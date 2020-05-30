const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    content: String,
    company: String,
    industry: String,
    date: String
});
schema.index({ title: "text" });

module.exports = mongoose.model( "coopad", schema );