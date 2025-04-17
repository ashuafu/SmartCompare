const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
  cardNumber: {
    type: String,
    required: true,
    set: (value) => value.replace(/\s+/g, "").slice(-4).padStart(16, "*"), // Store only last 4 digits, mask others
  },
  cardType: { type: String, required: true, enum: ["Visa", "MasterCard", "Amex", "Discover"] },
  expiryMonth: { type: Number, required: true, min: 1, max: 12 },
  expiryYear: { type: Number, required: true },
  nameOnCard: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
