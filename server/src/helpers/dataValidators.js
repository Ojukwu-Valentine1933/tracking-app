const User = require("../models/userModel")

const checkEmailExist = async (email) => {
        const user =  await User.findOne({email: email});

        if(user) {
            // return true;
            res.status(403).json({message: "User already Exists,  Login Instead"})
            return
        }
}

module.exports = checkEmailExist;