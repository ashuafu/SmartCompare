const asyncHandler = require("../middleware/async");
const Profile = require("../models/profile");
const { errorHandler } = require("../utils/features");

const getProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({ user: req.params.userId });
  if (!profile) {
    return next(new errorHandler("Profile not found", 404));
  }

  res.json(profile);
});

const createOrUpdateProfile = asyncHandler(async (req, res, next) => {
  const { userId, address, city, state, country, postalCode, cardNumber, cardType, expiryMonth, expiryYear, nameOnCard } = req.body;
  console.log(req.body);

  if (!address || !userId || !city || !state || !country || !postalCode || !cardNumber || !cardType || !expiryMonth || !expiryYear || !nameOnCard) {
    return next(new errorHandler("Please provide all fields", 400));
  }

  const profileFields = {
    user: userId,
    address,
    city,
    state,
    country,
    postalCode,
    cardNumber,
    cardType,
    expiryMonth,
    expiryYear,
    nameOnCard,
  };

  let profile = await Profile.findOne({ user: userId });

  if (profile) {
    profile = await Profile.findOneAndUpdate({ user: userId }, { $set: profileFields }, { new: true });
    return res.json(profile);
  }

  profile = new Profile(profileFields);
  await profile.save();
  res.json(profile);
});

module.exports = {
  getProfile,
  createOrUpdateProfile,
};
