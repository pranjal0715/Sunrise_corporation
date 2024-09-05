import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Update this with the actual path

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const Navigate = useNavigate();

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 border-b border-gray-200 dark:border-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="https://sunrisecorporation.co.in/"
          className="flex items-center"
        >
          <img src={Logo} className="h-10" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-8">
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/"
                className={`block py-2 px-3 ${
                  window.location.pathname === "/"
                    ? "text-blue-900 rounded"
                    : "text-gray-900  dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  window.location.pathname === "/" ? "page" : undefined
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/about"
                className={`block py-2 px-3 ${
                  window.location.pathname === "/about"
                    ? "text-blue-900 rounded"
                    : "text-gray-900  dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  window.location.pathname === "/about" ? "page" : undefined
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/product"
                className={`block py-2 px-3 ${
                  window.location.pathname === "/product"
                    ? "text-blue-900 rounded"
                    : "text-gray-900  dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  window.location.pathname === "/product" ? "page" : undefined
                }
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to="/contact"
                className={`block py-2 px-3 ${
                  window.location.pathname === "/contact"
                    ? "text-blue-900 rounded"
                    : "text-gray-900  dark:text-white dark:hover:bg-gray-700"
                }`}
                aria-current={
                  window.location.pathname === "/contact" ? "page" : undefined
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => {
            window.scrollTo(0, 0);
            Navigate("/Product");
          }}
          type="button"
          className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>

        {/* Mobile Menu Button */}
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <ImCross className="h-6 w-6 text-neutral-700" />
          ) : (
            <MdOutlineMenu className="h-6 w-6 text-neutral-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
      <div id="mobile-menu" className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-50 dark:bg-gray-800">
          <ul className="flex flex-col space-y-1 font-medium">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-black hover:bg-gray-300"
                aria-current={window.location.pathname === '/' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-300 dark:text-white dark:hover:bg-gray-900"
                aria-current={window.location.pathname === '/about' ? 'page' : undefined}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
                aria-current={window.location.pathname === '/product' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-300 dark:text-white dark:hover:bg-gray-700"
                aria-current={window.location.pathname === '/contact' ? 'page' : undefined}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )} */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-50"
          onClick={closeMenu}
        >
          <div
            className="space-y-1 px-2 pb-3 pt-2 bg-gray-50 dark:bg-gray-800 w-64 h-full"
            onClick={(e) => e.stopPropagation()} // Prevents menu close on content click
          >
            {/* Logo Positioned Above the Menu */}
            <div className="px-3 py-4">
              <a
                href="https://sunrisecorporation.co.in/"
                className="flex items-center"
              >
                <img src={Logo} className="h-10" alt="Logo" />
              </a>
            </div>

            <ul className="flex flex-col space-y-1 font-medium">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-black hover:bg-gray-300 transition-colors duration-200 ease-in-out"
                  aria-current={
                    window.location.pathname === "/" ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 transition-colors duration-200 ease-in-out dark:text-white dark:hover:bg-gray-900"
                  aria-current={
                    window.location.pathname === "/about" ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 transition-colors duration-200 ease-in-out dark:text-white dark:hover:bg-gray-700"
                  aria-current={
                    window.location.pathname === "/product" ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-400 transition-colors duration-200 ease-in-out dark:text-white dark:hover:bg-gray-700"
                  aria-current={
                    window.location.pathname === "/contact" ? "page" : undefined
                  }
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
