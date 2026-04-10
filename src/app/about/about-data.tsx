 import Image from 'next/image';
import Link from 'next/link';



export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50  overflow-hidden">
    
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center bg-black">
        <Image
          src="/assets/images/bill9.jpg"  
          alt="Bilberry Blue refined design in motion"
          fill
          className="object-cover brightness-[0.70]"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            About Bilberry Blue
          </h1>
          <p className="text-xl md:text-3xl font-light tracking-wide">
            Design is not decoration. It is a strategic expression of how you live, work, and experience comfort.
          </p>
        </div>
      </section>
      
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div 
            className="
              grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 
              p-8 md:p-12 lg:p-16 rounded-3xl 
              transition-all duration-500 ease-in-out
              hover:bg-accent/10 hover:shadow-xl
            "
          >
            {/* Left Column: Who We Are */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                Bilberry Blue is a premier interior design and styling studio specializing in residential, commercial, and event projects. 
                We combine creativity, precision, and luxury to craft spaces that are unforgettable.
              </p>
            </div>

            {/* Right Column: Our Vision */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                To be a trusted luxury design brand known for refined aesthetics, exceptional quality, and spaces that inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values – centered, clean layout */}
      <section className="py-6 md:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-6 md:mb-10">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Excellence
              </h3>
              <p className="text-secondary text-base md:text-lg">
                Uncompromising quality in design and delivery.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Intentional Design
              </h3>
              <p className="text-secondary text-base md:text-lg">
                Thoughtful, purposeful spaces.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Client-Centered
              </h3>
              <p className="text-secondary text-base md:text-lg">
                Designs shaped around your lifestyle.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                Timeless Aesthetics
              </h3>
              <p className="text-secondary text-base md:text-lg">
                Beauty that lasts beyond trends.
              </p>
            </div>
          </div>
        </div>
      </section>
 
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let’s Create Something Extraordinary
          </h2>
          <p className="text-xl md:text-2xl md:mb-10 mb-4 md:mb-12 opacity-90">
            Whether residential, commercial, or events — we design spaces that inspire and endure.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-12 py-2 rounded-full font-bold uppercase tracking-wider text-lg md:text-xl hover:bg-accent/90 transition shadow-2xl"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}