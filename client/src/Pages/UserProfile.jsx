import React, { useState } from "react";
import { FaMapMarkerAlt, FaCreditCard, FaUser } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useGetProfileQuery, useCreateOrUpdateProfileMutation } from "../Services/api";
import { showAlert } from "../Utils/Utils";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { data: profile, isLoading } = useGetProfileQuery(user._id);
  const [editMode, setEditMode] = useState(false);

  if (isLoading) {
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <main className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0 py-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Your Profile</h2>

        {profile && !editMode ? (
          <div className="flex flex-col gap-6">
            <ProfileDetails profile={profile} />
            <button onClick={() => setEditMode(true)} className="self-start mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-2xl transition">
              Update Profile
            </button>
          </div>
        ) : (
          <ProfileForm initialData={profile || null} userId={user._id} onFinish={() => setEditMode(false)} />
        )}
      </main>
      <Footer />
    </>
  );
};

const ProfileDetails = ({ profile }) => (
  <div className="bg-white shadow-lg rounded-2xl p-6 space-y-6">
    <div className="flex items-center gap-3 text-gray-700">
      <FaUser className="text-blue-500 text-lg" />
      <span className="font-semibold">Name on Card:</span> {profile.nameOnCard}
    </div>
    <div className="flex items-center gap-3 text-gray-700">
      <FaMapMarkerAlt className="text-blue-500 text-lg" />
      <span className="font-semibold">Address:</span> {`${profile.address}, ${profile.city}, ${profile.state}, ${profile.country} - ${profile.postalCode}`}
    </div>
    <div className="flex items-center gap-3 text-gray-700">
      <FaCreditCard className="text-blue-500 text-lg" />
      <span className="font-semibold">Card:</span> {profile.cardType} - {profile.cardNumber} {/* Displaying full card number */}
    </div>
    <div className="flex items-center gap-3 text-gray-700">
      <FaCreditCard className="text-blue-500 text-lg" />
      <span className="font-semibold">Expiry:</span> {profile.expiryMonth}/{profile.expiryYear}
    </div>
  </div>
);

const ProfileForm = ({ initialData = {}, userId, onFinish }) => {
  const [formData, setFormData] = useState({
    userId: userId,
    nameOnCard: initialData?.nameOnCard || "",
    address: initialData?.address || "",
    city: initialData?.city || "",
    state: initialData?.state || "",
    country: initialData?.country || "",
    postalCode: initialData?.postalCode || "",
    cardType: initialData?.cardType || "Visa",
    cardNumber: initialData?.cardNumber || "", // Showing full card number
    expiryMonth: initialData?.expiryMonth || "",
    expiryYear: initialData?.expiryYear || "",
  });

  const [createOrUpdateProfile, { isLoading }] = useCreateOrUpdateProfileMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = Object.values(formData).every((field) => String(field).trim() !== "");
    if (!isValid) {
      return showAlert("Validation error!", "All fields are required!", "error");
    }

    const cardNumberDigits = formData.cardNumber;
    const expectedLength = 16;

    if (!/^\d+$/.test(cardNumberDigits)) {
      return showAlert("error", "Validation error!", "Card Number must contain only digits!");
    }

    if (cardNumberDigits.length !== expectedLength) {
      return showAlert("error", "Validation error!", `Card Number must be exactly ${expectedLength} digits long!`);
    }

    if (formData.expiryMonth.length !== 2) {
      return showAlert("error", "Validation error!", "Expiry Month must be exactly 2 digits long!");
    }

    if (formData.expiryYear.length !== 4) {
      return showAlert("error", "Validation error!", "Expiry Year must be exactly 4 digits long!");
    }

    try {
      await createOrUpdateProfile({ ...formData }).unwrap();
      showAlert("success", "Profile updated successfully", "");
      if (onFinish) onFinish(); // return to detail view
    } catch (err) {
      console.error("Error saving profile:", err);
      showAlert("error", "Failed to save profile!", "Check console for details.");
    }
  };

  const handleCancel = () => {
    setFormData({
      userId: userId,
      nameOnCard: initialData?.nameOnCard || "",
      address: initialData?.address || "",
      city: initialData?.city || "",
      state: initialData?.state || "",
      country: initialData?.country || "",
      postalCode: initialData?.postalCode || "",
      cardType: initialData?.cardType || "Visa",
      cardNumber: initialData?.cardNumber || "",
      expiryMonth: initialData?.expiryMonth || "",
      expiryYear: initialData?.expiryYear || "",
    });
    if (onFinish) onFinish();
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">{initialData ? "Update Your Profile" : "Complete Your Profile"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name on Card</label>
            <input type="text" name="nameOnCard" value={formData.nameOnCard} placeholder="John Doe" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <input type="text" name="address" value={formData.address} placeholder="123 Main Street" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">City</label>
            <input type="text" name="city" value={formData.city} placeholder="London" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">State</label>
            <input type="text" name="state" value={formData.state} placeholder="Wales" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Country</label>
            <input type="text" name="country" value={formData.country} placeholder="UK" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Postal Code</label>
            <input type="text" name="postalCode" value={formData.postalCode} placeholder="44000" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Card Type</label>
            <select name="cardType" value={formData.cardType} onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition bg-white">
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Card Number</label>
            <input type="text" name="cardNumber" value={formData.cardNumber} placeholder="4111 1111 1111 1111" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Expiry Month</label>
            <input type="text" name="expiryMonth" value={formData.expiryMonth} placeholder="MM (e.g. 04)" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Expiry Year</label>
            <input type="text" name="expiryYear" value={formData.expiryYear} placeholder="YYYY (e.g. 2025)" onChange={handleChange} required className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition" />
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button type="button" onClick={handleCancel} className="w-full py-3 rounded-2xl text-white font-semibold bg-gray-400 hover:bg-gray-500 transition">
            Cancel
          </button>
          <button type="submit" disabled={isLoading} className={`w-full py-3 rounded-2xl text-white font-semibold ml-4 ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 transition"}`}>
            {isLoading ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
