const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const url = `mongodb+srv://saftdb:saftpassword@cluster0.jt8vf.mongodb.net/saft?retryWrites=true&w=majority?authSource=admin`
const path = require("path");
const cors = require("cors");
//environment variable
env.config();

//mangodb connection
//mongodb+srv://saft_user:<password>@cluster0.jt8vf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Connected to database !!");
  })
  .catch((err) => {
    console.log("Connection failed !!" + err.message);
  });

//routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const servicesRoutes = require('./routes/services');
const serviceItemsRoutes = require('./routes/serviceItems');
const cartRoutes = require('./routes/cart');
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const profileRoutes = require("./routes/profile");
const adminorderRoutes = require("./routes/admin/order");

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")))
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', servicesRoutes);
app.use('/api', serviceItemsRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);
app.use('/api', addressRoutes);
app.use('/api', profileRoutes);
app.use('/api', adminorderRoutes);

app.get('/',(req,res,next) => {
    res.status(200).json({
        message:"Hello"
    });
});

app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT || 2000, () => {
  console.log(`Server running on ${process.env.PORT || 2000}`);
});
