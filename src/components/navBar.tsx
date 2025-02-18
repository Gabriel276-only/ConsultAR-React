import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="border-gray-300 bg-gray-200 dark:bg-gray-800 dark:border-gray-800 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="\assets\logos\logo-removebg-preview.png"
              alt="Logo"
              className="w-40 h-40"
            />
          </Link>
          <button
            onClick={toggleMenu}
            className="relative z-10 flex flex-col justify-center items-center w-10 h-10 md:hidden focus:outline-none"
          >
            <span
              className={`block w-8 h-1 bg-gray-500 dark:bg-white rounded transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-500 dark:bg-white rounded mt-1 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-gray-500 dark:bg-white rounded mt-1 transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-white bg-red-900 rounded md:bg-transparent md:text-red-700 md:dark:text-red-500 dark:bg-red-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                
                
                <a  
                  href="#sobre"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Serviços
                </a>
                 
              </li>
              <li>
                <a
                  href="https://linktr.ee/consultarsaudebemestar?fbclid=PAZXh0bgNhZW0CMTEAAaaerrkDLWY4UF766OI5anUjL7wuFd4kulh5iTqhOzOKrNv26EBYScvDVro_aem_HldQRDo3IKMeFKnbIAnLKw"  target='_blank' rel='noopener noreferrer'
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contato
                </a>
              </li>
              <li>
              <Link
                  to="/forms"
                  className="block py-4 px-3 w-full text-gray-100 bg-red-700 rounded-md hover:bg-red-600 hover:px-5 transition-all duration-300 ease-in-out md:w-auto md:p-1 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                        Encontre um Profissional
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
