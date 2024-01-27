const express= require('express');
const mongoose= require('mongoose');
const app= express();

mongoose.connect('mongodb://127.0.0.1:27017/firstapp')
.then(()=>console.log("Connected"))
.catch((error)=>console.log(error))

//JSON Parser
app.use(express.json()); //general middleware

app.use('/api/user',require('./routes/user.routes'));

app.listen(5000,()=>{
    console.log("Server started on PORT 5000");
})