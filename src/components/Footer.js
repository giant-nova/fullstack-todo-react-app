import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p>&copy; {new Date().getFullYear()} Todo App - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
