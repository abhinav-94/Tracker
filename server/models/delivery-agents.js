const mongoose=require('mongoose');

var DeliveryAgent=mongoose.model('deliveryAgent',{
  id:{
    type:Number,
    unique:true
  },
  name:{
    type:String,
    required:true
  },
  phone_num:{
    type:Number,
    required:true
  },
  available:{
    type:Boolean,
    required:true
  },
  longitude:{
    type:Number,
    required:true
  },
  latitude:{
    type:Number,
    required:true
  },
  customerEmail:{
    type:String,
    default:''
  }
});


module.exports={DeliveryAgent};
