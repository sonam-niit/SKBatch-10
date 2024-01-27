const express= require('express');
const UserModel= require('../models/user.model');

const router= express.Router();

//create new User
router.post('/',async(req,res)=>{
    const {name,email,password,username}=req.body; //Object Destructing
    const newUser= new UserModel({name,email,password,username });
    try {
       const resp=await newUser.save();
       res.send({message:"User Created",resp})
    } catch (error) {
        res.send({message:"error occured",error})
    }
    
})
//Get all Users
router.get('/',async(req,res)=>{
    try {
        const users=await UserModel.find();
        res.send(users);
    } catch (error) {
        res.send({message:"error occured",error})
    }
})
//Get by Id
router.get('/:id',async(req,res)=>{
    const id=req.params.id;
    try {
        const user=await UserModel.findOne({_id:id});
        res.send(user);
    } catch (error) {
        res.send({message:"error occured",error})
    }
})
//Get by Id
router.delete('/:id',async(req,res)=>{
    const id=req.params.id;
    try {
        const resp=await UserModel.findByIdAndDelete({_id:id});
        if(!resp){
          return res.send({message:"Unable to Delete User"})
        }
        res.send("User Deleted Successfully")
    } catch (error) {
        res.send({message:"error occured",error})
    }
})
//Put update
router.put('/:id',async(req,res)=>{
    const id=req.params.id;
    const {name,password}=req.body;
    try {
        const resp=await UserModel.findByIdAndUpdate(id,req.body);
        if(!resp){
          return res.send({message:"Unable to Update User"})
        }
        res.send("User Updated Successfully")
    } catch (error) {
        res.send({message:"error occured",error})
    }
})

module.exports=router;