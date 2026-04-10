import Image from 'next/image';
import Link from 'next/link';


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero / Intro */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-black ">
        <Image
          src="/assets/images/bill8.jpg"  
          alt="Premium interior design showcase"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Strategic design that balances function, elegance, and lasting value.
          </p>
        </div>
      </section>

      {/* Three-column services breakdown */}
      <section className="py-6 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary">
            Our Core Services
          </h2>
          <p className="text-md md:text-lg lg:text-xl text-center mb-4 md:mb-10 mt-2 md:mt-3">
            We curate complete environments—never just isolated pieces.
          </p>
          {/* Service 1 */}
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 md:gap-12">
           
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Interior Design
              </h3>
              <p className="text-secondary mb-6">
                From concept to completion, we design spaces that feel refined, balanced, and lived-in.
              </p> 
              <p className="text-secondary mb-6">
                 Our approach blends aesthetics with practicality, ensuring every space performs as beautifully as it looks.
              </p>
            </div>
 
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Funiture Design
              </h3>
              <p className="text-secondary mb-6">
                We source and create furniture pieces that anchor a space—defined by quality, proportion, and timeless appeal.
              </p> 
              <p className="text-secondary mb-6">
                Curated, not crowded. <br/>
                Intentional, not excessive.
              </p>
            </div>
 
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Event Styling
              </h3>
              <p className="text-secondary mb-6">
                We design event environments that communicate theme, mood, and excellence—whether intimate or large-scale.
              </p> 
              <p className="text-secondary mb-6">
                Every event is styled with purpose and presence.
              </p>
            </div>
          </div>
         
          {/* Call to action at bottom */}
          <div className="text-center mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-8 md:py-3 py-1 rounded-full font-semibold uppercase tracking-wider md:text-lg text-md hover:bg-accent/90 transition shadow-xl"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Two-column: Image left + Content right */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/bill9.jpg" // premium interior project photo
                alt="Strategic interior design in progress"
                fill
                className="object-cover"
              />
            </div>

            {/* Right: Text content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tight">
                Designed with Purpose
              </h2>
              {/* <p className="text-lg md:text-xl text-secondary leading-relaxed">
                At Billberry Blue, we believe design is not decoration — it is a strategic expression of how you live, work, and experience comfort. Every project begins with understanding your lifestyle, needs, and vision.
              </p> */}
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                At Billberry, we believe great spaces are not accidental. <br/>
                They are thoughtfully curated—balancing form, function, and feeling.
              </p>
              {/* <p className="text-lg md:text-xl text-secondary leading-relaxed">
                We combine thoughtful spatial planning, premium material selection, and precise execution to create spaces that are functional, timeless, and engineered to increase the long-term value of your property.
              </p> */}
              <p className="text-lg md:text-xl text-secondary leading-relaxed">
                Every detail is intentional. <br/>
                Every piece has a role. <br/>
                Every space is designed to elevate how you live, work, and gather.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent text-primary md:px-10 px-6 py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-accent/90 transition shadow-lg"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
 
       {/* New Section 1: Why Choose Billberry Blue   */}
      <section className="py-6 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-6 md:mb-10">
            Why Billberry Blue
          </h2>
 
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93V17.93zm2-13.86c3.94.49 7 3.85 7 7.93s-3.06 7.44-7 7.93V4.07z"/>
                  </svg>
                ),
                title: 'Strategic Design',
                desc: 'Every decision is intentional — aligned with how the space will truly be used.',
              },
              {
                icon: (
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                ),
                title: 'Craftsmanship & Quality',
                desc: 'Precision execution with trusted artisans and premium materials that last.',
              },
              {
                icon: (
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                ),
                title: 'True Collaboration',
                desc: 'You are a partner throughout — your vision, expertly guided and executed.',
              },
              {
                icon: (
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ),
                title: 'Timeless Aesthetic',
                desc: 'Modern elegance that endures beyond trends and increases asset value.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Centered icon with hover scale */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 ease-out">
                  {item.icon}
                </div>

                {/* Title with hover accent color */}
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-base md:text-lg px-4 max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four-column image showcase */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-4 md:mb-16">
            Our Craft in Action
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { src: '/assets/images/bill1.jpg', label: 'Consultation & Discovery' },
              { src: '/assets/images/bill5.jpg', label: 'Concept Development' },
              { src: '/assets/images/bill6.jpg', label: 'Design & Styling' },
              { src: '/assets/images/bill7.jpg', label: 'Execution & Delivery' },
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <p className="text-lg md:text-xl font-semibold">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> 
      
      {/* // === New Section 2: Detailed Design Process === */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-12 md:mb-16">
            Our Proven Process
          </h2>

          <div className="space-y-8 md:space-y-18">
            {[
              {
                step: '01',
                title: 'Consultation & Discovery',
                desc: 'Understanding your vision and objectives',
              },
              {
                step: '02',
                title: 'Concept Development',
                desc: 'Translating ideas into refined design concepts.',
              },
              {
                step: '03',
                title: 'Design & Styling',
                desc: 'Curating materials, furnishings, and finishes.',
              },
              {
                step: '04',
                title: 'Execution & Delivery',
                desc: 'Bringing the design to life with precision',
              },
               
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center text-primary text-3xl md:text-4xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-secondary text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* // === New Section 4: Final CTA Banner === */}
      <section className="py-10 md:py-14 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let’s Create Something Exceptional

          </h2>
          <p className="text-xl md:text-2xl mb-10 md:mb-12 opacity-90">
            We collaborate closely with our clients to deliver spaces that feel intentional, elevated, and timeless.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-2 rounded-full font-bold uppercase tracking-wider text-m md:text-xl hover:bg-accent/90 transition shadow-2xl"
          >
            Start Your Project
          </Link>
        </div>
         
      </section>

      
      {/* // === New Section 3: Testimonials === */}
      {/* <section className="pt-8 md:pt-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-12 md:mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                quote: "Billberry Blue turned our outdated space into a functional masterpiece that feels truly ours. The attention to detail is unmatched.",
                author: "Dr. & Mrs. Adebayo, Abuja",
              },
              {
                quote: "Working with them was seamless — they listened, challenged ideas when needed, and delivered beyond expectations. Our home now feels like an investment.",
                author: "Mr. Chukwu, Lagos",
              },
              {
                quote: "Professional, creative, and reliable. The project finished on time and the quality speaks for itself. Highly recommended.",
                author: "Corporate Client, Victoria Island",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-lg">
                <p className="text-secondary italic text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}