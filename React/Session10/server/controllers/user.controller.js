const bcrypt= require('bcrypt');
const UserModel = require('../models/user.model');
//Function to add New User
const addNewUser = async (req, res) => {
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
        res.send({ message: "User Created", resp })
    } catch (error) {
        res.send({ message: "error occured", error })
    }

}
const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (error) {
        res.send({ message: "error occured", error })
    }
}
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserModel.findOne({ _id: id });
        res.send(user);
    } catch (error) {
        res.send({ message: "error occured", error })
    }
}
const deleteById = async (req, res) => {
    const id = req.params.id;
    try {
        const resp = await UserModel.findByIdAndDelete({ _id: id });
        if (!resp) {
            return res.send({ message: "Unable to Delete User" })
        }
        res.send("User Deleted Successfully")
    } catch (error) {
        res.send({ message: "error occured", error })
    }
}

const updateById = async (req, res) => {
    const id = req.params.id;
    const { name, password } = req.body;
    try {
        const resp = await UserModel.findByIdAndUpdate(id, req.body);
        if (!resp) {
            return res.send({ message: "Unable to Update User" })
        }
        res.send("User Updated Successfully")
    } catch (error) {
        res.send({ message: "error occured", error })
    }
}

module.exports = {
    addNewUser,
    getAllUser,
    getById,
    deleteById,
    updateById
}