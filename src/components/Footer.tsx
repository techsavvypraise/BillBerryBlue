import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="relative h-[380px] md:h-[420px] overflow-hidden">
      
        <div className="absolute inset-0">
          <Image
            src="/assets/images/bill3.jpg"   
            alt="Luxurious orange armchair in modern interior"
            fill
            className="object-cover brightness-[0.85] contrast-[1.05]"
            priority
          />
        </div>
 
        <div className="absolute inset-0 bg-black/45" />
 
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
           
          <div className="text-white max-w-lg text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
              Luxurious Home Furniture
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Premium craftsmanship for timeless living spaces
            </p>
          </div>
 
          <Link
            href="/projects"
            className="
              mt-6 md:mt-0
              inline-flex items-center px-6 py-0 md:py-4
              bg-transparent border-2 border-white text-white
              rounded-full text-m font-semibold uppercase tracking-wider
              hover:bg-white hover:text-primary transition-all duration-300
              shadow-xl
            "
          >
            Check out our latest collection
          </Link>
        </div>
      </div>
 
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          
          {/* Column 1: Contact us → wider (col-md-5) */}
          <div className="md:col-span-5">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-6 uppercase tracking-wider">
              Contact us
            </h3>
            <div className="space-y-5 text-sm md:text-base">
              <div className="flex items-start">
                <svg 
                  className="w-6 h-6 mr-3 text-accent flex-shrink-0" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="font-medium text-white">LOCATION</p>
                  <p>No 12 Eneka Link Road off G.U. Ake Road , close to paradise Estate,Eneka, Port Harcourt </p>
                  <p className="font-medium text-white mt-4">BRANCH OFFICE</p>
                  <p>No 78 Aba Road Opp Craft Centre beside Wema bank Port Harcourt</p>
                   
                </div> 
              </div>

              <div>
                <p className="flex items-center">
                  <svg 
                    className="w-6 h-6 mr-3 text-accent flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <a href="mailto:info@billberryblue.com" className="hover:text-accent transition">
                    info@billberryblue.com
                  </a>
                </p>
              </div>

              {/* Follow us */} 
              <div className="flex space-x-8 mb-6">
                <p className="text-white/90">Follow us:</p>
                <a 
                  href="https://www.facebook.com/share/18dEHcknpo/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:text-white transition text-2xl"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>

                <a 
                  href="https://instagram.com/billberryblue" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:text-white transition text-2xl"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.579.228.228 2.579.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.156 4.473 2.507 6.824 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.473-.156 6.824-2.507 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.156-4.473-2.507-6.824-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Site Map → col-md-4 */}
          <div className="md:col-span-4">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-6 uppercase tracking-wider">
              Site Map
            </h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition">Projects</Link></li>
              <li><Link href="/about" className="hover:text-accent transition">About us</Link></li> 
              <li><Link href="/contact" className="hover:text-accent transition">Contact us</Link></li>
            </ul>
          </div>

          {/* Column 3: Shopping & Policies → col-md-3 (no follow us or copyright here) */}
          <div className="md:col-span-3">
            <h3 className="text-white text-lg md:text-xl font-semibold mb-6 uppercase tracking-wider">
              Shopping & Policies
            </h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href=" " className="hover:text-accent transition">How to Order</Link></li>
              <li><Link href=" " className="hover:text-accent transition">Payment Methods</Link></li>
              <li><Link href=" " className="hover:text-accent transition">Shipping Information</Link></li>
              <li><Link href=" " className="hover:text-accent transition">Return Policy</Link></li>
              <li><Link href=" " className="hover:text-accent transition">Order Tracking</Link></li>
              <li><Link href=" " className="hover:text-accent transition">Privacy Policy</Link></li>
              <li><Link href=" " className="hover:text-accent transition">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Centered Copyright & Follow Us – now OUTSIDE the columns, full-width */}
      <div className="border-t border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-center text-sm">
         
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              Copyright © 2026 Billberry Blue. All Rights Reserved.
            </p>
            <div className="text-sm text-gray-500 space-x-4">
              <Link href=" " className="hover:text-accent transition">Privacy Policy</Link>
              <span>|</span>
              <Link href=" " className="hover:text-accent transition">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

 