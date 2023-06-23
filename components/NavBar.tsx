'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from 'next/navigation'
import { Logo} from '@/components'

const NavBar = () => {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  // Route -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // `params` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params)
  console.log(pathname)
  console.log(router)
  useEffect(() => { })

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  
  const [activeItem, setActiveItem] = useState("");


  const [showPortfolioSubMenu, setShowPortfolioSubMenu] = useState(false);

  const handlePortfolioSubMenu = () => {
    setShowPortfolioSubMenu(!showPortfolioSubMenu);
  };



 

  return (
    <header className="flex justify-between">
      <Logo />
    <nav className="navBar fixed flex justify-end hover:text-purple md:items-center w-full px-4 py-8 mx-auto">
      <ul className="hidden navMenu md:flex flex-col justify-end md:flex-row space-x-4 ">
        <li className="text-white hover:text-lime-600">
          <Link href="/" className="hover:text-purple" >
              HOME
            
          </Link>
        </li>
        <li
          className={ "text-white hover:text-lime-600" + (pathname == "/" ? "text-lime-500" : "")}
          onMouseEnter={handlePortfolioSubMenu}
          onMouseLeave={handlePortfolioSubMenu}
        ><span className="flex  ">
          PORTFOLIO
          <span className="mt-1">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              </span>
          </span>
          {showPortfolioSubMenu && (
            <ul className="nav-projects flex flex-col">
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-1" >
                    PROJECT 1
                 
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-2"  >
                    PROJECT 2
                 
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-3"  >
                    PROJECT 3
                 
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-4" >
                    PROJECT 4
                  
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-5"  >
                    PROJECT 5
                 
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="text-white hover:text-lime-600">
          <Link href="/About" >
              ABOUT
           
          </Link>
        </li>
        <li className="text-white hover:text-lime-600">
          <Link href="/Contact"  >
              CONTACT
          
          </Link>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className=" text-white md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 cursor-pointer ${isMenuOpen ? 'hidden' : ''}`}
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
      
      <ul
        className={`${
          isMenuOpen ? "flex flex-col absolute top-8 right-8 z-10 pt-0 mt-0 p-0 rounded-md shadow-md" : "hidden"
        }  hamburgerMenu text-white md:hidden cursor-pointer`}
      >
        
        <li className="text-white hover:text-lime-600">
          <Link href="/" className="hover:text-purple" >
              HOME
            
          </Link>
        </li>
        <li
          className={ "text-white flex flex-row hover:text-lime-600" + (pathname == "/" ? "text-lime-500" : "")}
          onMouseEnter={handlePortfolioSubMenu}
          onMouseLeave={handlePortfolioSubMenu}
        >
          <div className="flex flex-row">
          <div className="flex   ">
          PORTFOLIO
            <div className="mt-1 ml-1.5 -rotate-90	">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                </path>
              </svg>
              </div>
              
            </div>
          </div>
          {showPortfolioSubMenu && (
            <ul className="nav-projects flex flex-col">
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-1" >
                    PROJECT 1
                 
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-2"  >
                    PROJECT 2
                 
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-3"  >
                    PROJECT 3
                 
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-4" >
                    PROJECT 4
                  
                </Link>
              </li>
              <li className="text-white hover:text-lime-600">
                <Link href="/PORTFOLIO/PROJECT-5"  >
                    PROJECT 5
                 
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="text-white hover:text-lime-600">
          <Link href="/About" >
              ABOUT
           
          </Link>
        </li>
        <li className="text-white hover:text-lime-600">
          <Link href="/Contact"  >
              CONTACT
          
          </Link>
        </li>
        </ul>
        
      </nav>
      </header>
  );
};

export default NavBar;
