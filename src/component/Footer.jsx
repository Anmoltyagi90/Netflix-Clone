import React from "react";

const Footer = () => {
  const links = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  return (
    <div className="bg-black text-gray-400 py-12 px-6 md:px-20">
      
      {/* Top Text */}
      <p className="mb-8 text-sm">
        Questions?{" "}
        <span className="underline cursor-pointer hover:text-white">
          Contact us.
        </span>
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm mb-8">
        {links.map((link, i) => (
          <p
            key={i}
            className="underline cursor-pointer hover:text-white transition"
          >
            {link}
          </p>
        ))}
      </div>

      {/* Language Selector */}
      <div className="mb-6">
        <select
          className="bg-black border border-gray-600 text-white px-4 py-2 rounded-md 
          focus:outline-none focus:border-white"
        >
          <option>🌐 English</option>
          <option>🌐 Arabic</option>
        </select>
      </div>

      {/* Bottom Text */}
      <p className="text-sm mb-6">Netflix India</p>

      {/* reCAPTCHA Note */}
      <p className="text-xs text-gray-500 max-w-md">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <span className="underline cursor-pointer hover:text-white">
          Learn more.
        </span>
      </p>
    </div>
  );
};

export default Footer;