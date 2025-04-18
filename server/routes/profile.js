const express = require("express");
const router = express.Router();
const { getProfile, createOrUpdateProfile } = require("../controllers/profileController");

router.get("/:userId", getProfile);

router.put("/me", createOrUpdateProfile);

module.exports = router;
