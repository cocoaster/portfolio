import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='bg-black   w-full h-64 md:h-48 '>
            <div className=" mt-10 ">
                <Link href="/" className="object-contain">
                    <Image src="/OmetheoWhiteWholeLogo.svg"
          alt="Ometheo Logo" width={4} height={4} className="footer-logo m-auto " priority={true}
        />
          </Link>   
            </div>
            
        </footer>
    );
};

export default Footer;