const jwt = require('jsonwebtoken');
const dontend = require('dotenv').config();
const User = require('../models/user.model');

const autheticate = async (req, res, next) => {
    //check the Token
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Auth failed..",success:false })
    }
    const token = authHeader.split(" ")[1];
    try {
        //verify and decode the Token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user=payload;
        //proceed to route
        next(); 
    } catch (error) {
        return res.status(401).json({message:"UnAuthoried.."})
    }
}
module.exports= autheticate;