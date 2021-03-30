const {check, validationResult} = require('express-validator') 
exports.validateSignupRequest = [
    check('firstname')
    .notEmpty()
    .withMessage('Firstname is required'),
    check('lastname')
    .notEmpty()
    .withMessage('Lastname is required'),
    check('email')
    .isEmail()
    .withMessage('Valid email is required'),
    check('mypassword')
    .isLength({min : 6})
    .withMessage('Password must be atleast 6 characters long'),
    check('contactnumber')
    .isLength({min : 10})
    .withMessage('Phone number must be atleast 10 characters long'),
    
]

exports.validateLoginRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid email is required'),
    check('mypassword')
    .isLength({min : 6})
    .withMessage('Password must be atleast 6 characters long'),
]

exports.isRequestValidated = (req,res,next) => {
    const errors = validationResult(req);
    console.log(errors.array())
    if(errors.array().length>0){
        return res.status(400).json({
            error:errors.array()[0].msg
        });
    }
    next();
}