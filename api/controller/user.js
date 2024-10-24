const User = require("../model/user");


const signUp= (req, res)=>{
    const user = new User({
        email : req.body.email,
        password : req.body.password
    });


    user.save()
    .then((result)=>{
        res.status(202).json({
            message : "User Created",
            result : result
        });    
    }).catch((err)=>{
        res.status(501).json({
            message : "Internal Server Error",
            error : err
        });
    });;
   
};


module.exports = { signUp}
