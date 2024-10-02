const express=require('express');
const route=express.Router();
const Lettalk=require('../Modal/Contact');

route.post('/Contact',async(req,res)=>{
    const newContact = new Lettalk(req.body)

    try{
        const saveItem=await newContact.save();
        res.status(201).json(saveItem)
    }catch(err){
        res.json({err:err.message})
    }
})
module.exports=route;