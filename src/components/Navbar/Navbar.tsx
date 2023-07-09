import { useState } from 'react';
import navLogo from '../../assets/Nav.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav>
      <div className="w-full flex justify-between items-center px-4 sm:px-6 lg:px-16">
        <div className="flex py-4 w-full  items-center">
          <div>
            <a href="/">
              <img src={navLogo} alt="logo" />
            </a>
          </div>
          <div className="hidden ml-24 md:flex md:justify-between w-full">
            <div className="flex items-center space-x-8">
              <a href="#">
                <p className="text-primary">My URLs</p>
              </a>
              <a href="">
                <p>Features</p>
              </a>
              <a href="">
                <p>Pricing</p>
              </a>
              <a href="">
                <p>Analytics</p>
              </a>
              <a href="">
                <p>FAQs</p>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 w-[20rem]">
            <p className="text-primary">Log In</p>
            <button className="bg-primary text-white rounded-full px-4 py-3">
              Try for free{' '}
            </button>
          </div>
        </div>

        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggle}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#">
              <p className="text-primary">My URLs</p>
            </a>
            <a href="" className="px-3 py-2">
              <p>Features</p>
            </a>
            <a href="" className="px-3 py-2">
              <p>Pricing</p>
            </a>
            <a href="" className="px-3 py-2">
              <p>Analytics</p>
            </a>
            <a href="" className="px-3 py-2">
              <p>FAQs</p>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
