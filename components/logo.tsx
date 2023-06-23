'use client'

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <div className="flex justify-start z-10">
          <Link href="/" className="object-contain">
        <Image
          src="dharma.svg"
          alt="Ometheo Logo"
          width={50}
          height={50}
          className="logo z-10"
          priority={true}
        />
      </Link>   
        </div>
    );
};

export default Logo;