"use client";
import React, { use } from "react";
import { useState, useEffect, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Tea from "../public/tea.gif";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setShowdropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 px-4 md:px-8 lg:px-20 py-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Tea} alt="Tea Gif" width={36} className="invertImg md:w-[44px]" />
            <span className="font-bold text-lg md:text-xl">Get Me a Chai</span>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-4">
          {session && (
            <>
              <button
                ref={btnRef}
                onClick={() => setShowdropdown(!showdropdown)}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Account
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdown"
                className={`z-10 ${
                  showdropdown ? "" : "hidden"
                } absolute top-16 right-4 md:right-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/${session.user.name}`}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => signOut()}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}

          {session && (
            <button
              className="text-white w-fit bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center min-h-[44px]"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            >
              Logout
            </button>
          )}
          {!session && (
            <Link href="/login">
              <button className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center min-h-[44px]">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="text-white focus:outline-none p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {showMobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col items-center mt-4 gap-2 pb-4">
          {session && (
            <>
               <Link href="/dashboard" onClick={() => setShowMobileMenu(false)} className="hover:text-blue-400 py-3 px-4 min-h-[44px] flex items-center">Dashboard</Link>
               <Link href={`/${session.user.name}`} onClick={() => setShowMobileMenu(false)} className="hover:text-blue-400 py-3 px-4 min-h-[44px] flex items-center">Your Page</Link>
               <button 
                 onClick={() => { signOut(); setShowMobileMenu(false); }}
                 className="hover:text-blue-400 py-3 px-4 min-h-[44px]"
               >
                 Sign out
               </button>
            </>
          )}
           {!session && (
            <Link href="/login" onClick={() => setShowMobileMenu(false)}>
              <button className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center min-h-[44px]">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
