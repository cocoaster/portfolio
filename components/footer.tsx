import React from 'react';
import Image from "next/image";
import Link from "next/link";

const footer = () => {
    return (
        <footer className='bg-black   w-full h-64 '>
            <div className=" mt-20 ">
                <Link href="/" className="object-contain">
                    <Image src="/Ometheo_White_Logo.png"
          alt="Ometheo Logo" width={170} height={170} className="footer-logo m-auto " priority={true}
        />
          </Link>   
            </div>
            
        </footer>
    );
};

export default footer;