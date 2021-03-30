const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        trim:true,
        min:3,
        max:20,
        required:true
    },
    lastname: {
        type:String,
        trim:true,
        min:3,
        max:20,
        required:true
    },
    username: {
        type:String,
        trim:true,
        min:3,
        max:20,
        required:true,
        lowercase:true,
        unique:true
    },
    email: {
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true
    },
    mypassword: {
        type:String,
        required:true
    },
    role: {
        type:String,
        enum: ['user','admin'],
        default: 'user'
    },
    contactnumber: {
        type:String,
        required:true
    },
    profilepic: {
        type:String
    }
},
{
    timestamps:true
});

userSchema.virtual('password')
.set(function(password){
    this.mypassword = bcrypt.hashSync(password,10);
});

userSchema.virtual('fullname')
.get(function(){
    return `$[this.firstname} ${this.lastname}`;
});

userSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password, this.mypassword);
    }
}

module.exports = mongoose.model('User',userSchema);