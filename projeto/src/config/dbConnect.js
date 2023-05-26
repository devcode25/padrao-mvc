const mongoose = require ("mongoose"); 

mongoose.connect("mongodb+srv://admin:Senacpe@cluster0.1vuycki.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db;