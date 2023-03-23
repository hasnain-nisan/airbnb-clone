const express = require("express");
const router = express.Router();

const {
    register,
    login,
    userProfile
} = require('../controllers/AuthController') 

router.post("/register", register);
router.post("/login", login);
router.get("/profile", userProfile);

module.exports = router;