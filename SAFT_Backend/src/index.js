const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const url = `mongodb+srv://saftdb:saftpassword@cluster0.jt8vf.mongodb.net/saft?retryWrites=true&w=majority?authSource=admin`

//environment variable
env.config();

//mangodb connection
//mongodb+srv://saft_user:<password>@cluster0.jt8vf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => {
      console.log('Connected to database !!');
    })
    .catch((err)=>{
      console.log('Connection failed !!'+ err.message);
});

//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const servicesRoutes = require('./routes/services');

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', servicesRoutes);

app.get('/',(req,res,next) => {
    res.status(200).json({
        message:"Hello"
    });
});

app.post('/data',(req,res,next) => {
    res.status(200).json({
        message:req.body
    });
});

app.listen(process.env.PORT || 2000, () => {
    console.log(`Server running on ${process.env.PORT || 2000}`);
})