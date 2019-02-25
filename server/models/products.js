var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number
  }
});


var Product = mongoose.model('Product', schema);
module.exports = {Product};
