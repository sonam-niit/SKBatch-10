require('dotenv').config();
const bcrypt= require('bcrypt');
const UserModel = require('../models/user.model');
const jwt= require('jsonwebtoken');
//Function to add New User
const register = async (req, res) => {
    const { name, email, password, username } = req.body; //Object Destructing
    if (!name || !email || !password || !username) {
        return res.status(400).send({ message: "All fields are mandatory" })
    }
    try {
        const user= await UserModel.findOne({email});
        if(user){
            return res.status(400).send({message:"Email Id already registered"})
        }
        const user1= await UserModel.findOne({username});
        if(user1){
            return res.status(400).send({message:"Username has already been taken by Someone"})
        }
        const hashPwd= await bcrypt.hash(password,10);
        const newUser = new UserModel({ name, email, password:hashPwd, username });
        const resp = await newUser.save();
        res.status(201).send({ message: "User Created", resp })
    } catch (error) {
        res.send({ message: "error occured", error })
    }

}
const login=async(req,res)=>{
    const {email, password} = req.body; 
    if (!email || !password) {
        return res.status(400).send({ message: "All fields are mandatory" })
    }
    try {
        //Check If the email is already registered or not
        const user= await UserModel.findOne({email});
        if(!user){
            return res.status(400).send({message:"Email Id is not Registered with Us"})
        }
        const checkPwd=await bcrypt.compare(password,user.password);
        if(checkPwd){
            const payload={id:user._id,name:user.name,email:user.email};
            const token= jwt.sign(payload,process.env.JWT_SECRET);
           return res.send({ message: "User Logged In Successfully",token,payload })
        }else{
            return res.send({ message: "invalid credentials"})
        }
    } catch (error) {
        res.send({ message: "error occured", error })
    }
}

module.exports={register,login}