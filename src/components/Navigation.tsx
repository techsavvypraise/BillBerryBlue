'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when menu opens
  useEffect(() => {
    if (isMenuOpen) setIsSearchOpen(false);
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300
          ${scrolled
            ? 'bg-black/70 backdrop-blur-md border-b border-accent/40'
            : 'bg-transparent'}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 pointer-events-auto">
          <div className="flex items-center justify-between h-20 md:h-24 relative">
            
            {/* Left Social */}
            <div className="flex items-center space-x-6 md:space-x-8">
              <a
                href="https://instagram.com/billberryblue"
                className="text-accent hover:text-white transition text-xl md:text-2xl"
              >
                <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 2.579.228.228 2.579.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.156 4.473 2.507 6.824 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.473-.156 6.824-2.507 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.156-4.473-2.507-6.824-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/> </svg>
              </a>
            </div>

            {/* Center Logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
            >
              <Image
                src="/assets/images/bluberry-logo.png"
                alt="Billberry Blue Logo"
                width={500}
                height={167}
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto object-contain drop-shadow-xl transition-all duration-300"
                priority
              />
            </Link>

            {/* Right Controls */}
            <div className="flex items-center space-x-6 md:space-x-10">
              
              {/* Search Button */}
              {!isMenuOpen && (
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-accent hover:text-white transition text-2xl md:text-3xl"
                >
                  <svg
                    className="w-7 h-7 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}

              {/* Hamburger */}
              {!isMenuOpen && (
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-accent hover:text-white transition text-3xl md:text-4xl px-5"
                  aria-label="Open menu"
                >
                  ≡
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-t border-accent/30">
            <div className="max-w-4xl mx-auto px-6 py-6 md:py-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for your product..."
                  autoFocus
                  className="w-full bg-transparent border-b-2 border-accent text-white text-lg md:text-2xl placeholder-accent/60 focus:outline-none pb-3 pr-12"
                  onBlur={() =>
                    setTimeout(() => setIsSearchOpen(false), 200)
                  }
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center">
          
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-accent text-5xl hover:text-white transition"
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Menu Links */}
          <nav className="space-y-10 text-center">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map(
              (item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-3xl md:text-5xl font-light tracking-widest text-white hover:text-accent transition duration-500"
                >
                  {item.toUpperCase()}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </>
  );
}
