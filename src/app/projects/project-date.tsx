'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects & Portfolio | Billberry Blue',
  description: 'Explore our portfolio of premium residential and commercial interior design and furniture projects – functional, timeless spaces built to increase value.',
};

const allProjects = [
    {
      id: 1,
      title: 'Wuse II Residence',
      category: 'Residential',
      image: '/assets/images/bill9.jpg',
      description: 'A modern family home transformed for efficiency and timeless elegance.',
      problem: 'Underutilized open-plan layout with poor flow and limited storage.',
      solution: 'Strategic zoning, custom joinery, warm neutral palette with premium textures.',
      result: 'Increased usable space by 30%, enhanced daily comfort, and raised property appeal.',
    },
    {
      id: 2,
      title: 'Victoria Island Penthouse',
      category: 'Residential',
      image: '/assets/images/bill8.jpg',
      description: 'Luxury penthouse with panoramic views and bespoke furniture.',
      problem: 'Cold, trend-heavy finishes that felt impersonal.',
      solution: 'Layered materials, custom statement pieces, integrated smart lighting.',
      result: 'Warm, sophisticated retreat that reflects the owner’s lifestyle.',
    },
    {
      id: 3,
      title: 'Aminu Kano Corporate Office',
      category: 'Commercial',
      image: '/assets/images/bill7.jpg',
      description: 'Brand-aligned workspace designed for productivity and prestige.',
      problem: 'Generic office layout with low energy and poor acoustics.',
      solution: 'Acoustic panels, ergonomic zoning, premium materials with brand colors.',
      result: 'Improved team focus, elevated client perception, better workplace culture.',
    },
    {
      id: 4,
      title: 'Port Harcourt Villa',
      category: 'Residential',
      image: '/assets/images/bill6.jpg',
      description: 'Tropical-modern villa blending indoor-outdoor living.',
      problem: 'Disconnected spaces with limited natural light flow.',
      solution: 'Large sliding glass doors, natural materials, strategic landscaping integration.',
      result: 'Seamless indoor-outdoor experience, higher perceived value.',
    },
    {
      id: 5,
      title: 'Lekki Hospitality Lounge',
      category: 'Commercial',
      image: '/assets/images/bill5.jpg',
      description: 'Boutique lounge with refined ambiance and custom furniture.',
      problem: 'Outdated, cluttered space lacking identity.',
      solution: 'Curated palette, bespoke seating, mood lighting and art curation.',
      result: 'Elevated guest experience and increased repeat visits.',
    },
    {
      id: 6,
      title: 'Asokoro Family Retreat',
      category: 'Residential',
      image: '/assets/images/bill2.jpg',
      description: 'Multi-generational home focused on comfort and functionality.',
      problem: 'Fragmented layout unsuitable for extended family living.',
      solution: 'Open-plan living zones, private retreats, durable yet luxurious finishes.',
      result: 'Harmonious family living with lasting elegance.',
    },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial'>('All');

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-black ">
        <Image
          src="/assets/images/bill5.jpg"
          alt="Billberry Blue premium projects showcase"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Spaces engineered for function, refined for elegance, built to last.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-6 md:py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            {['All', 'Residential', 'Commercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`
                  px-4 py-3 rounded-full font-medium transition-all
                  ${activeCategory === cat 
                    ? 'bg-white shadow-sm text-primary' 
                    : 'text-secondary hover:text-primary'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Grid - unchanged */}
      <section className="py-8 md:py-14">
        <div className="max-w-7xl md:mx-auto px-0 lg:px-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-xl text-secondary">
              No projects found in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-10">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`} // or use query: /projects?project=${project.id}
                  className="group relative aspect-[4/3] md:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-base md:text-lg opacity-90 mb-4 line-clamp-2">{project.description}</p>
                    <span className="inline-block bg-accent text-primary px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-accent/90 transition">
                      View Case Study
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* === NEW SECTION: Our Work + Project Types === */}
      <section className="pt-6 md:pt-0 pb-2 md:pb-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading & Intro */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Our Work
            </h2>
            <p className="text-lg md:text-xl text-secondary max-w-4xl mx-auto">
              Each Billberry Blue project is a reflection of refined taste, thoughtful design, and meticulous execution. 
              Our portfolio showcases a curated selection of spaces designed with intention and elegance.
            </p>
          </div>
          {/* Three-column project types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Residential */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Residential Interiors
              </h4>
              <p className="text-secondary text-base md:text-lg">
                Custom-designed homes that balance comfort, sophistication, and functionality tailored to reflect personal style and lifestyle needs.
              </p>
            </div>

            {/* Commercial */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Commercial Spaces
              </h4>
              <p className="text-secondary text-base md:text-lg">
                Purpose-driven designs that elevate brands and enhance user experience across offices, studios, and hospitality environments.
              </p>
            </div>

            {/* Event Styling */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Event Styling
              </h4>
              <p className="text-secondary text-base md:text-lg">
                Elegant event designs crafted to create memorable experiences through cohesive styling and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-4 md:py-14 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
            Ready to Create Your Legacy Space?
          </h2>
          <p className="text-xl md:text-2xl mb-10 md:mb-12 opacity-90">
            Let us engineer a space that works beautifully for you — today and for years to come.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent text-primary px-4 py-2 rounded-full font-bold uppercase tracking-wider text-m md:text-lg hover:bg-accent/90 transition shadow-2xl"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </main>
  );
}
 