const User = require('../models/userModel');

exports.registerUser = async(req,res)=>{

    try{
        const {firstName,lastName,email,password}= req.body
        const user = new User({firstName,lastName,email, password})
        await user.save();
        res.status(201).json({message: "User saved successfully"});

    }

    catch(error){
        res.status(500).json({message: "Error registering user"});
    }
}