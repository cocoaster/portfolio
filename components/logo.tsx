'use client'

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className=" logo-container mt-8 h-auto">
          <Link href="/" className="o">                                                   <Image                                                      src="/Ometheo_Green_Logo.png"
          alt="Ometheo Logo"
          width={170}
          height={30}
          className="logo md:w-full "
          priority={true}   
        />
        </Link>
        <h1 className="ml-4 text-base  md:text-3xl lg:text-lg ">WEB STRATEGIE</h1>

        </div>
    );
};

export default Logo;