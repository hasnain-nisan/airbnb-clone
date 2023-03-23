const express = require("express");
const router = express.Router();

const {
    register,
    login,
    userProfile,
    logout
} = require('../controllers/AuthController') 

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", userProfile);

module.exports = router;