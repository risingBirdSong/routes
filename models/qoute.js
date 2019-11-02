
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qouting_db', {useNewUrlParser: true});


const QouterSchema = new mongoose.Schema({
  name: String,
  quote: String,
  date : Date
})
// create an object to that contains methods for mongoose to interface with MongoDB

const Qouter = mongoose.model('Qouter', QouterSchema);

module.exports = Qouter;