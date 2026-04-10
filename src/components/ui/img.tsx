'use client';

import { ImgProps } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';


export default function Img({ className = '' }: ImgProps) {
  return (
    <Link href="/" className={`flex items-center justify-center ${className}`}>
      <Image
        src="/assets/images/logo.png"            
        alt="Billberry Blue – Premium Interior Design & Furniture"
        width={240}
        height={80}
        className="
          h-10           // mobile
          sm:h-11
          md:h-12
          lg:h-14
          xl:h-16
          w-auto
          object-contain
          drop-shadow-md
          transition-all duration-300
        "
        priority                               // Important for navbar (loads instantly)
        quality={90}
      />
    </Link>
  );
}