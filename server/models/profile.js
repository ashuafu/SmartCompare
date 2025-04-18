const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  cardNumber: {
    type: String,
    required: true,
  },
  cardType: { type: String, required: true, enum: ["Visa", "MasterCard"] },
  expiryMonth: { type: Number, required: true, min: 1, max: 12 },
  expiryYear: { type: Number, required: true },
  nameOnCard: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
