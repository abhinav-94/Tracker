const express=require('express');

const {Product}=require('../models/products');
const {DeliveryAgent}=require('../models/delivery-agents');
var {mongoose}=require('../mongoose/mongoose');

const router=express.Router();
mongoose.set('useFindAndModify', false);


router.get('/',(req,res)=>{
  res.send('Local Host :3000 from the api route');
});


router.get('/products',(req,res)=>{
   Product.find({}).exec(function (err,products) {
    if(err){
      res.status(401).send('cant find articles');
    }
    else{
      res.json(products);
    }
});
});

router.get('/trackingInfo',(req,res)=>{
  DeliveryAgent.findOne({available:true}).exec(function(err,agent){
    if(err){
      res.status(401).send('Agent Unavailable');
    }
    else{
    res.json(agent);
    DeliveryAgent.findOneAndUpdate({id:agent.id}, { $set: {available: false}},()=>{});
    }
  });
});





module.exports=router;
