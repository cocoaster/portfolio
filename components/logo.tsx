'use client'

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className=" mt-8 ">
          <Link href="/" className="object-contain">
                                                                                                                                                                        <Image
                                                                                                                                                                          src="/Ometheo_Green_Logo.png"
                                                                                                                                                                          alt="Ometheo Logo"
                                                                                                                                                                          width={170}
                                                                                                                                                                          height={170}
                                                                                                                                                                          className="logo "
                                                                                                                                                                          priority={true}
                                                                                                                                                                        />
          </Link>   
        </div>
    );
};

export default Logo;