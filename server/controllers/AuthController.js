require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const bcryptSalt = bcrypt.genSaltSync(10);
const JWT_REFRESH_TOKEN_SECRET = "07ad8e76-8dad-40b0-9230-07da4fa9003b";

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

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({
        message: "User not found"
      });
    } else {
      passOk = bcrypt.compareSync(password, user.password)
      if(!passOk){
        return res.status(400).json({
          message: "Password does not match"
        });
      } else {
        const token = await jwt.sign(
          {
            id: user._id,
            username: user.username,
            email: user.email
          },
          JWT_REFRESH_TOKEN_SECRET,
          {}
        );

        return res.cookie('token', token, { sameSite: 'none', secure: true })
          .status(200).json({
            message: "Successfully logged in",
            data: user
          });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      data: error
    });
  }
};

const userProfile = async (req, res) => {
  try {
    const {token} = req.cookies;
    if(token){
      jwt.verify(token, JWT_REFRESH_TOKEN_SECRET, {}, async (err, user) => {
        if(err) throw err;
        const {username, email, _id} = await User.findById(user.id)
        res.status(200).json({username, email, _id})
      })
    } else {
      res.json(null);
    }
  } catch (error) {
    return res.status(422).json(error);
  }
};

module.exports = {
    register,
    login,
    userProfile
}