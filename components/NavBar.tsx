'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname} from 'next/navigation'
import { Logo} from '@/components'

interface Params {
  [key: string]: string;
}

const NavBar = () => {
  const pathname: string = usePathname();
  const currentRoute : string = usePathname();
  console.log(pathname);

  useEffect(() => {
    // Code à exécuter après le rendu initial du composant
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [showPortfolioSubMenu, setShowPortfolioSubMenu] = useState<boolean>(false);
  const handlePortfolioSubMenu = () => {
    setShowPortfolioSubMenu(!showPortfolioSubMenu);
  };

  return ( 
    <header >
      <div className="navigation">
        <Logo />
        <nav className="md:px-4 md:py-8 ">
          <ul className="hidden space-x-8  md:flex ">
            <li >
              <Link href="/" className={currentRoute === "/" ? "nav-active" : ""}>
                  HOME
              </Link>
            </li>
            <li
              onMouseEnter={handlePortfolioSubMenu}
              onMouseLeave={handlePortfolioSubMenu}
            >
              <div className="flex">
                PORTFOLIO
                <span className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                    </path>
                  </svg>
                </span>
              </div>
              
              {showPortfolioSubMenu && (
                <ul className="nav-projects-desktop  flex flex-col">
                  <li >
                    <Link href="/PORTFOLIO/PROJECT-1" className={currentRoute === "/PORTFOLIO/PROJECT-1" 
        ? "nav-active" 
        : ""}>
                      PROJECT 1
                    </Link>
                  </li>
                  <li >
                    <Link href="/PORTFOLIO/PROJECT-2" className={currentRoute === "/PORTFOLIO/PROJECT-2" 
        ? "nav-active" 
        : ""}>
                      PROJECT 2
                    </Link>
                  </li>
                  <li >
                    <Link href="/PORTFOLIO/PROJECT-3" className={currentRoute === "/PORTFOLIO/PROJECT-3" 
        ? "nav-active" 
        : ""}>
                      PROJECT 3
                    </Link>
                  </li>
                  <li >
                    <Link href="/PORTFOLIO/PROJECT-4" className={currentRoute === "/PORTFOLIO/PROJECT-4" 
        ? "nav-active" 
        : ""}>
                      PROJECT 4
                    </Link>
                  </li>
                  <li >
                    <Link href="/PORTFOLIO/PROJECT-5" className={currentRoute === "/PORTFOLIO/PROJECT-5" 
        ? "nav-active" 
        : ""}>
                      PROJECT 5
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li >
              <Link href="/About" className={currentRoute === "/About" 
        ? "nav-active" 
        : ""}>
                ABOUT
              </Link>
            </li>
            <li >
              <Link href="/Contact" className={currentRoute === "/Contact" 
        ? "nav-active" 
        : ""}>
                CONTACT
              </Link>
            </li>
          </ul>
          {/* Hamburger Menu */}
          <div className="hamburger flex md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6  cursor-pointer ${isMenuOpen ? 'hidden' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 cursor-pointer  ${isMenuOpen ? '' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className={"-mx-10 rounded-md shadow-md md:hidden hamburger-menu" + (isMenuOpen ? "" : "hidden") }>
            <ul
              className={`${
                isMenuOpen ? "flex flex-col   pt-0 mt-0 p-0 " : "hidden"
              }  hamburgerMenu  md:hidden cursor-pointer`}
            >
              <li onClick={toggleMenu}
  >
                <Link href="/" >
                  HOME
                </Link>
              </li>
              <li onClick={handlePortfolioSubMenu}
              >
                <span className={`${showPortfolioSubMenu ? "bg border-top" : "" } flex`}
              >
                  PORTFOLIO
                  <span className={`${showPortfolioSubMenu ? "openPortfolio-arrow" : "" } portfolio-arrow`} 
  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                      </path>
                    </svg>
                  </span>
                </span>
                {showPortfolioSubMenu &&(
                  <ul   className={`${
                    isMenuOpen ? "flex flex-col   pt-0 mt-0 p-0 " : "hidden"
                  }  mobileNav-projects flex flex-col`}>
                    <li  onClick={toggleMenu}>
                      <Link href="/PORTFOLIO/PROJECT-1" className={currentRoute === "/PORTFOLIO/PROJECT-1" 
        ? "nav-active" 
        : ""}>
                        PROJECT 1
                      </Link>
                    </li>
                    <li  onClick={toggleMenu}>
                      <Link href="/PORTFOLIO/PROJECT-2">
                        PROJECT 2
                      </Link>
                    </li>
                    <li  onClick={toggleMenu}>
                      <Link href="/PORTFOLIO/PROJECT-3">
                        PROJECT 3
                      </Link>
                    </li>
                    <li  onClick={toggleMenu}>
                      <Link href="/PORTFOLIO/PROJECT-4">
                        PROJECT 4
                      </Link>
                    </li>
                    <li  onClick={toggleMenu}>
                      <Link href="/PORTFOLIO/PROJECT-5">
                        PROJECT 5
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li             onClick={toggleMenu}
  >
                <Link href="/About">
                  ABOUT
                </Link>
              </li>
              <li             onClick={toggleMenu}
  >
                <Link href="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    </header>
  );
};

export default NavBar;