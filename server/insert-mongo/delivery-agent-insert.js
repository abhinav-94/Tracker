const mongodb=require('mongodb');

var {DeliveryAgent}=require('../models/delivery-agents');
var {mongoose}=require('../mongoose/mongoose');

var arr=[
  {
  id:1,
  name:'Ravi',
  phone_num:232320392,
  available:true,
  latitude:12.97,
  longitude:77.74
},{
  id:2,
  name:'Ajay',
  phone_num:332320392,
  available:true,
  latitude:12.97,
  longitude:77.74
},{
  id:3,
  name:'Kumar',
  phone_num:432320392,
  available:true,
  latitude:12.97,
  longitude:77.74
},{
  id:4,
  name:'Joshi',
  phone_num:532320392,
  available:true,
  latitude:12.97,
  longitude:77.74
},{
  id:5,
  name:'Ashok',
  phone_num:632320392,
  available:true,
  latitude:12.97,
  longitude:77.74
},{
  id:6,
  name:'Vinay',
  phone_num:732320392,
  available:true,
  latitude:12.97,
  longitude:77.74
},{
  id:7,
  name:'Sunny',
  phone_num:832320392,
  available:true,
  latitude:12.97,
  longitude:77.74
}];

DeliveryAgent.insertMany(arr, function(error, docs) {
  if(error)
  console.log(error);
  else {
    console.log(docs);
  }
});
module.exports={DeliveryAgent};
