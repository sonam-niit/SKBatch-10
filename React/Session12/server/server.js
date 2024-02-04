const express= require('express');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

const app= express();
const PORT= process.env.PORT;
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected"))
.catch((error)=>console.log(error))

//JSON Parser
app.use(express.json()); //general middleware

app.use('/api/auth',require('./routes/auth.routes'));
app.use('/api/user',require('./routes/user.routes'));

app.listen(PORT,()=>{
    console.log(`Server started on PORT ${PORT}`);
})