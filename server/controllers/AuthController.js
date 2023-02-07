const bcrypt = require('bcrypt');
const User = require('../models/User');

const bcryptSalt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    
    if(password.trim().length < 6){
      return res.status(400).json({
        msg:"Password length must be greatar or equal to 6"
      });
    }

    const newUser = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password.trim(), bcryptSalt) 
    });

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(422).json(error);
  }
};

module.exports = {
    register,
}