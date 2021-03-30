const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.signup =((req,res) =>{
    User.findOne({
        email : req.body.email
    })
    .exec((error,user) => {
        if(user) return res.status(400).json({
            message : "User already Registered"
        });
        const {
            firstname,
            lastname,
            email,
            mypassword,
            contactnumber
        } = req.body
        const newuser = new User({
            firstname,
            lastname,
            email,
            mypassword,
            contactnumber,
            username: Math.random().toString()
        });
        newuser.save((error,data) => {
            if(data){
                return res.status(201).json({
                    user:data
                });
            }
            if(error){
                return res.status(400).json({
                    message: "Something went wrong"
                });
            }
            
        });
    });
});

exports.login =((req,res) =>{
    User.findOne({
        email : req.body.email
    })
    .exec((error,user) => {
        if(error) return res.status(400).json({
            error
        });
        if(user){
            if(user.authenticate(req.body.password)){
                const token =jwt.sign({_id:user._id}, tuturu,{expireIn: '1h'});
                const{
                    firstname,
                    lastname,
                    email,
                    contactnumber,
                    role,
                    fullname
                } = user
                res.status(200).json({
                    token,
                    user:{
                        firstname,
                        lastname,
                        email,
                        contactnumber,
                        role,
                        fullname
                    }
                });
            }
            else{
                return res.status(400).json({
                    message:"Invalid Password"
                });
            }
        }
        else{
            return res.status(400).json({
                message:"Something went wrong"
            })
        }
    }); 
    
});