'use client'

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className=" logo-container mt-5 xl:pl-6 ">
          <Link href="/" className="o">                                                   <Image                                                      src="/OmetheoGreenWholeLogo.svg"
          alt="Ometheo Logo"
          width={150}
          height={30}
          className="logo md:w-3/5 "
          priority={true}   
        />
        </Link>
        <h1 className="ml-6 -mt-3.5 text-base  md:text-3xl lg:text-lg xl:text-5xl xl:-mt-10">WEB STRATEGIE</h1>

        </div>
    );
};

export default Logo;