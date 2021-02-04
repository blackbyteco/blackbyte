import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames';

// TODO: Create a Logo component
// import Logo from './partials/Logo'

// Declare prop types
type Props = {
  navPosition: String,
  hideNav: Boolean,
  hideSignIn: Boolean,
  bottomOuterDivider: Boolean,
  bottomDivider: Boolean
}

// Set default prop types
const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideCta: false,
  bottomOuterDivider: false,
  bottomDivider: false
}


// This is a section of a layout
const Header: React.FC = ({
  className,
  navPosition,
  hideNav,
  hideCta,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
    return (
      <section>
        {/* Desktop Menu */}
        <div className="relative bg-light dark:bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              {/* TODO: Fix Logo */}
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                </a>
              </div>

              <nav className="hidden md:flex space-x-10">
                <a href="/" className="text-base font-medium text-light dark:text-white hover:primary">
                  About Us
                </a>
                <a href="/" className="text-base font-medium text-gray-500 dark:text-white hover:text-blue-600">
                  FAQs
                </a>
                <a href="/" className="text-base font-medium text-gray-500 dark:text-white hover:text-blue-600">
                  Support
                </a>
                <a href="/" className="text-base font-medium text-gray-500 dark:text-white hover:text-blue-600">
                  Contact
                </a>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a href="/" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Book A Call
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* TODO: Mobile Menu */}
        <div>

        </div>
      </section>
    );
  }

Header.defaultProps = defaultProps;

export default Header;