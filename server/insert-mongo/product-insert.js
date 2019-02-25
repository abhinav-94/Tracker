const mongodb=require('mongodb');

var {Product}=require('../models/products');
var {mongoose}=require('../mongoose/mongoose');

var arr=[
  {
  name:'TV',
  price:10000
},{
  name:'AC',
  price:15000
},{
  name:'Fridge',
  price:5000
},{
  name:'Geyser',
  price:1000
},{
  name:'Washing-Machine',
  price:8000
},{
  name:'Sofa',
  price:10000
},{
  name:'Bean-Bag',
  price:500
},{
  name:'Football',
  price:300
},{
  name:'Bat',
  price:500
},{
  name:'Raquet',
  price:200
}];

Product.insertMany(arr, function(error, docs) {
  if(error)
  console.log(error);
  else {
    console.log(docs);
  }
});
module.exports={Product};
