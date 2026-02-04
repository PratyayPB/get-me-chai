import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white flex items-center justify-center px-4 md:px-8 py-4 md:py-6">
      <p className="text-sm md:text-base text-center">
        Copyright &copy; {currentYear} Get me A Chai - All rights reserved!
      </p>
    </footer>
  );
};

export default Footer;
