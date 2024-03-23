import React, { useEffect, useState } from "react";
import LOGO from "../../assets/logo512.png";
import { Link, useNavigate } from "react-router-dom";
// import Image from "next/image";

const Navbar = () => {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("token");
    setToken(data);
  }, []);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const arr = [
    { text: "Home", url: "/" },
    { text: "Product", url: "/products" },
  ];

  return (
    <div className="lg:container lg:mx-0 px-5 bg-backgound-color" id="element3">
      <nav className="sticky top-0 z-50 p-0 py-5 w-full">
        <div className="w-full flex flex-wrap items-center justify-between ">
          <a href="/" className="flex items-center">
            <img
              width={50}
              height={50}
              src={LOGO}
              className="w-15  mr-3"
              alt="Logo"
            />
            {/* <h1 className="text-2xl font-bold">PMR CONCRETE</h1> */}
          </a>
          <div className="flex md:order-2 ">
            <div className="flex lg:space-x-6 ">
              <a
                href="tel:+919188777704"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="text-2xl self-center">
                  <MdOutlineLocalPhone />
                </span> */}
              </a>
              <a
                href="mailto:pmrconcrete@pmrinfos.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-2xl self-center">
                  {token ? (
                    // <Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        navigate("/login");
                        localStorage.clear();
                      }}
                      // type="button"
                      className=" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Logout
                    </button>
                  ) : (
                    // </Link>
                    <Link to="/login">
                      <button
                        // onClick={loginHandler}
                        type="button"
                        className=" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      >
                        Login
                      </button>
                    </Link>
                  )}
                </span>
              </a>
            </div>
            <div className="lg:block hidden self-center">
              <a href="https://play.google.com/store/apps/details?id=com.vehicify.vehicifydriver">
                {/* <Button text="Dowload"  /> */}
              </a>
            </div>

            <button
              type="button"
              onClick={toggleMobileMenu} // Call the toggle function on button click
              className="ml-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={isMobileMenuOpen ? "true" : "false"} // Set aria-expanded based on the state
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul
              id="element"
              className="flex  flex-col p-4 md:p-0 mt-4 font-semibold bg-opacity-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 "
            >
              {arr.map((value, index) => {
                return (
                  <li key={value}>
                    <Link
                      key={index}
                      to={value.url}
                      className="block font-play py-2 pl-3 pr-4 text-font-color  rounded hover:bg-secondary md:hover:bg-transparent md:hover:text-secondary md:p-0"
                      aria-current="page"
                    >
                      {value.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
