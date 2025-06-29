import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
