import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Delicious Bites</h2>
            <p>
              Your go-to destination for mouthwatering meals and delightful desserts. 
              We bring taste and quality together.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white text-teal-700 rounded-full hover:bg-teal-800 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-teal-700 rounded-full hover:bg-teal-800 hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-teal-700 rounded-full hover:bg-teal-800 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-teal-700 rounded-full hover:bg-teal-800 hover:text-white transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/AllFoods" className="hover:underline">
                  All Foods
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>123 Foodie Lane, Culinary City, FL 12345</p>
            <p>Email: support@deliciousbites.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-teal-400 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Delicious Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
