// import React from 'react'
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <div>
//       <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-Black-800 dark:border-gray-600">
//     <span class="text-sm text-Black sm:text-center dark:text-black">© 2023 <a href="https://sunrisecorporation.co.in/" class="hover:underline">Sunrise™</a>. All Rights Reserved.
//     </span>
//     <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-Black sm:mt-0 gap-4">
//         <li>
//           <Link to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
//         </li>
//         <li>
//           <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
//         </li>
//     </ul>
// </footer>

//     </div>
//   )
// }

// export default Footer

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Footer = () => {
  
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap flex-row">
            {/* <!-- Links Section --> */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 ">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none flex flex-col space-y-2">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/"
                  className={`block py-2 px-3 ${
                    window.location.pathname === "/"
                      ? "text-blue-900 rounded"
                      : "text-gray-900 dark:text-white dark:hover:bg-gray-700"
                  }`}
                  aria-current={
                    window.location.pathname === "/" ? "page" : undefined
                  }
                >
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Home
                  </a>
                </Link>

                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/about"
                  className={`block py-2 px-3 ${
                    window.location.pathname === "/about"
                      ? "text-blue-900 rounded"
                      : "text-gray-900 dark:text-white dark:hover:bg-gray-700"
                  }`}
                  aria-current={
                    window.location.pathname === "/about" ? "page" : undefined
                  }
                >
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    About Us
                  </a>
                </Link>

                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/product"
                  className={`block py-2 px-3 ${
                    window.location.pathname === "/product"
                      ? "text-blue-900 rounded"
                      : "text-gray-900 dark:text-white dark:hover:bg-gray-700"
                  }`}
                  aria-current={
                    window.location.pathname === "/product" ? "page" : undefined
                  }
                >
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Product
                  </a>
                </Link>

                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/contact"
                  className={`block py-2 px-3 ${
                    window.location.pathname === "/contact"
                      ? "text-blue-900 rounded"
                      : "text-gray-900 dark:text-white dark:hover:bg-gray-700"
                  }`}
                  aria-current={
                    window.location.pathname === "/contact" ? "page" : undefined
                  }
                >
                  <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    Contact
                  </a>
                </Link>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                ADDRESS
              </h2>
              <p>
                Office No 419-420, 4th Floor, Zenon, Bamroli Road, Khatodra,
                TPS-6, Surat-395002, Gujarat, India
              </p>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4 mb-10 md:mb-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                E-MAIL
              </h2>
              <p className="mb-3">info@sunrisecorporation.co.in</p>
              <h2 className="gap-x-4 title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CONTACT NUMBER
              </h2>
              <p>+91 9624077111</p>
            </div>

            {/* <!-- Contact Section --> */}
            {/* <div class="lg:w-1/3 md:w-1/2 w-full bg-white rounded-lg p-8 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">
        We'd love to hear from you! Please fill out the form below.
      </p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea
          id="message"
          name="message"
          class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Submit
      </button>
      <p class="text-xs text-gray-500 mt-3">
        We respect your privacy and will never share your information.
      </p>
    </div> */}
          </div>
        </div>

        {/* ############################################################################################# */}
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a
              href="https://sunrisecorporation.co.in/"
              className="flex items-center"
            >
              <img src={Logo} className="h-10" alt="Logo" />

              {/* <span class="ml-3 text-xl">Tailblocks</span> */}
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 Sunrise Corporation Pvt. Ltd. —
              {/* <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a> */}
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
