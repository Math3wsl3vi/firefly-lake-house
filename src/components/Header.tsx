import React, { useEffect, useState } from 'react';
import { Button } from './Button';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/70 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className={`text-2xl font-serif ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            Firefly Lakehouse
          </span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`hover:text-amber transition-colors ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            About
          </a>
          <a href="#accommodations" className={`hover:text-amber transition-colors ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            Accommodations
          </a>
          <a href="#experiences" className={`hover:text-amber transition-colors ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            Experiences
          </a>
          <a href="#gallery" className={`hover:text-amber transition-colors ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            Gallery
          </a>
          <a href="#contact" className={`hover:text-amber transition-colors ${isScrolled ? 'text-cream' : 'text-cream'}`}>
            Contact
          </a>
           <Button onClick={() => document.getElementById('booking')?.scrollIntoView({
                    behavior: 'smooth'
                  })}>Book Now</Button>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-cream" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-charcoal/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-cream hover:text-amber transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </a>
              <a href="#accommodations" className="text-cream hover:text-amber transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Accommodations
              </a>
              <a href="#experiences" className="text-cream hover:text-amber transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Experiences
              </a>
              <a href="#gallery" className="text-cream hover:text-amber transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </a>
              <a href="#contact" className="text-cream hover:text-amber transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
              <Button fullWidth>Book Now</Button>
            </nav>
          </div>
        </div>}
    </header>;
}