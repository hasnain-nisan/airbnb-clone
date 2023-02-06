const User = require('./models/User');

const register = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    const accessToken =  newUser.generateAccessToken()
    res.status(200).json({
        accessToken
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
    register,
}