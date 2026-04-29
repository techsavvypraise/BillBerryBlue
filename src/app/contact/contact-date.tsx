'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission (replace with real API call later)
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero / Call to Action – Mobile-Optimized */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center bg-black ">
        {/* Background Image */}
        <Image
          src="/assets/images/bill3.jpg"
          alt="Contact Billberry Blue"
          fill
          className="object-cover brightness-[0.65] scale-105"
          priority
        />

        {/* Darker overlay for better text contrast on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl md:pt-4 pt-16 md:pb-4 pb-8 px-6 sm:px-10 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-8 leading-tight">
            Let&apos;s Create Something Extraordinary
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed">
            Begin your design journey with Bilberry Blue. Let&apos;s create a space that reflects your vision with elegance and precision.
          </p>

          {/* Buttons – better spacing & touch targets on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
            <Link
              href="#contact-form"
              className="
                inline-flex items-center justify-center 
                w-full sm:w-auto min-w-[220px]
                bg-accent text-primary px-10 md:py-2 py-2 
                rounded-full font-semibold uppercase tracking-wider 
                text-base sm:text-lg
                hover:bg-accent/90 transition shadow-xl
                focus:outline-none focus:ring-4 focus:ring-accent/40
              "
            >
              Book a Consultation
            </Link>

            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center 
                w-full sm:w-auto min-w-[220px]
                border-2 border-white text-white px-10 md:py-2 py-2 
                rounded-full font-semibold uppercase tracking-wider 
                text-base sm:text-lg
                hover:bg-white hover:text-primary transition shadow-xl
                focus:outline-none focus:ring-4 focus:ring-white/30
              "
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information + Form */}
      <section id="contact-form" className="py-8 md:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-secondary mb-8">
                  We&apos;d love to hear from you. Whether you&apos;re planning a full design project or need professional guidance, Bilberry Blue is here to help.
                </p>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <svg 
                    className="w-6 h-6 mr-3 text-accent flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Location
                </h3>
                <p className="text-secondary mb-2">Head Office: No 12 Eneka Link Road off G.U. Ake Road , close to paradise Estate,Eneka, Port Harcourt </p>
                {/* <ul className="text-secondary space-y-2">
                  <li>• Wuse II, Aminu Kano Crescent, Abuja, FCT</li>
                  <li>• Victoria Island, Lagos (Showroom)</li>
                  <li>• Port Harcourt, Rivers State (By Appointment)</li>
                </ul> */}
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                   
                  Branch Office
                </h3>
                <p>No 78 Aba Road Opp Craft Centre beside Wema bank Port Harcourt</p>
              </div>

               
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <span className="text-accent text-2xl mr-3">✉️</span>
                  Email
                </h3>
                <a
                  href="mailto:info@billberryblue.com"
                  className="text-secondary hover:text-accent transition text-lg"
                >
                  info@billberryblue.com
                </a>
              </div>

              {/* WhatsApp Quick Link */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <span className="text-accent text-2xl mr-3">WhatsApp</span>
                </h3>
                <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-accent transition text-lg inline-flex items-center"
                >
                  <span className="mr-2">Chat with us instantly</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.457 7.191c-3.578 0-6.48-1.164-8.935-3.381-1.318-1.184-2.292-2.684-2.804-4.363C.316 12.508.218 10.947.218 9.37c0-2.058.518-4.062 1.502-5.84C3.23 1.65 5.36.218 7.715.218c2.354 0 4.485 1.432 5.469 3.058.984 1.626 1.502 3.63 1.502 5.688 0 2.058-.518 4.062-1.502 5.84-1.318 2.058-3.448 3.491-5.802 3.491z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white p-2 md:p-8 rounded-2xl shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
                Book a Consultation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-secondary mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none transition bg-white"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Interior</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="event">Event Styling</option>
                    <option value="furniture">Furniture & Styling</option>
                    <option value="consultation">Initial Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent outline-none transition"
                    placeholder="Tell us about your project, space size, timeline, and any inspiration..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="
                    w-full bg-accent text-primary md:py-3 py-1 px-8 rounded-full 
                    font-semibold uppercase tracking-wider md:text-lg
                    hover:bg-accent/90 transition shadow-xl
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit & Book Consultation'}
                </button>

                {formStatus === 'success' && (
                  <p className="text-green-600 text-center mt-4 font-medium">
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="text-red-600 text-center mt-4 font-medium">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
 
      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            We Look Forward to Working with You
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-10">
            Every project starts with a conversation. Let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#contact-form"
              className="bg-white text-primary px-10 py-5 rounded-full font-semibold uppercase tracking-wider hover:bg-gray-100 transition"
            >
              Book Now
            </Link>
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-primary transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}