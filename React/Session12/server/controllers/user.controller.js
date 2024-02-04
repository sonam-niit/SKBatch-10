const bcrypt= require('bcrypt');
const UserModel = require('../models/user.model');

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
    getAllUser,
    getById,
    deleteById,
    updateById
}