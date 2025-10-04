import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Accommodations } from '../components/sections/Accommodations';
import { Experiences } from '../components/sections/Experiences';
import { Gallery } from '../components/sections/Gallery';
import { Booking } from '../components/sections/Booking';
import { Testimonials } from '../components/sections/Testimonials';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';
export function HomePage() {

  return <div className="font-sans text-charcoal bg-cream min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Experiences />
        <Gallery />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>;
}
