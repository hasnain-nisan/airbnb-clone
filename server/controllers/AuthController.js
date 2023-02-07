const bcrypt = require('bcrypt');
const User = require('../models/User');

const bcryptSalt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
  try {
    const {username, email, password} = req.body;
    const newUser = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcryptSalt) 
    });

    res.json(newUser);
    // await newUser.save();
    // const accessToken =  newUser.generateAccessToken()
    // res.status(200).json({
    //     accessToken
    // });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
    register,
}