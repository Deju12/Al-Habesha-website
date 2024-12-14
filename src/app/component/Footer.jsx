import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Al Habesha. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">
            Contact
          </a>
          <a
            href="https://maps.app.goo.gl/ECx7RRxNabvH4qPs5"
            className="text-gray-400 hover:text-white mx-2"
            target="_blank"
          >
            location
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
