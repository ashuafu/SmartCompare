import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaCcVisa, FaCcPaypal, FaCcMastercard, FaApple, FaGooglePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-10 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <FiMapPin className="text-blue-400" />
                <span>685 Market Street, Las Vegas, LA 95820, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-blue-400" />
                <a href="tel:+0995327869843" className="hover:text-blue-400 transition-colors">
                  (+099) 532-786-9843
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-blue-400" />
                <a href="mailto:support@example.com" className="hover:text-blue-400 transition-colors">
                  support@example.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Account Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Account</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Login / Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold uppercase tracking-wider text-white">Download App</h3>
            <p className="text-sm">Save $3 With App & New User only</p>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                <FaApple size={24} />
                <div>
                  <span className="text-xs">Download on the</span>
                  <p className="font-medium">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                <FaGooglePay size={24} />
                <div>
                  <span className="text-xs">Get it on</span>
                  <p className="font-medium">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Payment & Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xl">© 2025 All rights reserved by smart compare.</p>
            <div className="flex items-center gap-4">
              <p className=" font-medium">We Accept:</p>
              <div className="flex items-center gap-4">
                <FaCcVisa size={24} className="text-gray-400 hover:text-white transition-colors" />
                <FaCcPaypal size={24} className="text-gray-400 hover:text-white transition-colors" />
                <FaCcMastercard size={24} className="text-gray-400 hover:text-white transition-colors" />
                <FaApple size={24} className="text-gray-400 hover:text-white transition-colors" />
                <FaGooglePay size={24} className="text-gray-400 hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
