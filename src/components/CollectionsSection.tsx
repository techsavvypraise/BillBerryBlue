'use client';

import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    title: 'Living Rooms',
    image: '/assets/images/bill.jpg',  
    href: '/collections/living-rooms',
  },
  
  {
    title: 'Bedrooms',
    image: '/assets/images/bill5.jpg',
    href: '/collections/bedrooms',
  },
   
  {
    title: 'Outdoor Furniture',
    image: '/assets/images/bill6.jpg',
    href: '/collections/outdoor',
  },
  {
    title: 'Office Furniture',
    image: '/assets/images/bill7.jpg',
    href: '/collections/office',
  }, 
  {
    title: 'Wardrobes & Storage',
    image: '/assets/images/bill8.jpg',
    href: '/collections/wardrobes',
  },
  {
    title: 'Home Office & Study',
    image: '/assets/images/bill9.jpg',
    href: '/collections/home-office',
  }, 
  
  
];

export default function CollectionsSection() {
  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Text Block */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary mb-6">
            Design that Works. Beauty that Lasts.
          </h2>
          <p className="text-lg md:text-xl text-dark max-w-4xl mx-auto mb-8">
            Billberry Blue was founded on the belief that design is not decoration — it is a strategic expression of how you live, work, and experience comfort.
          </p>
          <p className="text-base md:text-lg text-dark max-w-4xl mx-auto">
            We curate and execute interior spaces and furniture solutions that are functional, refined, and purpose-driven. From sourcing premium materials to meticulous craftsmanship, we build strong partnerships with artisans and clients that endure as long as the spaces we create.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:px-8">
        {/* Grid of Collection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-8">
          {collections.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden md:rounded-xl shadow-lg aspect-[4/3] bg-black"
            >
              <Image
                src={item.image}
                alt={`${item.title} collection`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-75"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-4 tracking-wide">
                  {item.title.toUpperCase()}
                </h3>

                <Link
                  href={item.href}
                  className="
                    inline-block px-8 py-2 bg-accent text-primary 
                    rounded-full font-semibold uppercase tracking-wider 
                    text-sm md:text-base
                    hover:bg-accent/90 transition-all duration-300
                    shadow-lg
                  "
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
}