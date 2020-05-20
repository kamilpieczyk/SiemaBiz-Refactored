const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cvSchema = new Schema({
    username: String,
    name: String,
    surname: String,
    dateOfBirdth: String,
    email: String,
    phone: String,
    city: String,
    education: Array,
    workplaces: Array,
    certificates: Array,
    skills: Array,
    hobbies: Array
    
})

module.exports = mongoose.model( 'cv', cvSchema );