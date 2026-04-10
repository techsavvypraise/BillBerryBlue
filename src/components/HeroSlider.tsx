'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: '/assets/images/bill6.jpg', 
    headline: 'Design that Works.',
    subheadline: 'Beauty that Lasts.',
  },
  // {
  //   image: '/assets/images/bill2.jpg',
  //   headline: 'Strategic Spaces',
  //   subheadline: 'Engineered for Modern Living',
  // },
  {
    image: '/assets/images/bill9.jpg',
    headline: 'Timeless Elegance',
    subheadline: 'Crafted with Precision',
  },
  {
    image: '/assets/images/bill6.jpg',
    headline: 'Functional Luxury',
    subheadline: 'Elevate Your Everyday',
  },
  // {
  //   image: '/assets/images/bill7.jpg',
  //   headline: 'Purpose-Driven Design',
  //   subheadline: 'Where Form Meets Function',
  // },
  {
    image: '/assets/images/bill8.jpg',
    headline: 'Collaborative Creation',
    subheadline: 'Your Vision, Expertly Realized',
  },
  // {
  //   image: '/assets/images/bill9.jpg',
  //   headline: 'Premium Interiors',
  //   subheadline: 'Built to Increase Value',
  // },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full py-5 md:py-24">
              <Image
                src={slide.image}
                alt={`Hero slide ${index + 1}`}
                fill
                className="object-cover brightness-[0.65]"
                priority={index === 0}
                quality={85}
              />
              <div className="absolute inset-0 bg-black/15" /> {/* Dark overlay */}

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-8 px-6 py-4 md:pt-0 text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 drop-shadow-lg">
                  {slide.headline}
                </h1>
                <p className="text-xl md:text-3xl lg:text-4xl font-light tracking-wide mb-8 md:mb-12 max-w-3xl drop-shadow-md">
                  {slide.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mt-6 md:mt-10">
                  <Link
                    href="/contact"
                    className="bg-accent text-primary px-10 py-1 md:py-2 rounded-full font-semibold uppercase tracking-wider hover:bg-accent/90 transition shadow-lg"
                  >
                    Book a Consultation
                  </Link>
                  <Link
                    href="/projects"
                    className="border-2 border-white text-white px-10 py-2 mb-4 md:mb-0 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        {/* Custom Navigation Arrows – white by default */}
        <div className="swiper-button-prev absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-4xl md:text-5xl z-10 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />
        <div className="swiper-button-next absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-4xl md:text-5xl z-10 cursor-pointer opacity-80 hover:opacity-100 transition duration-300" />
      </Swiper>
 
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 swiper-pagination !flex justify-center gap-3" />
    </section>
  );
}