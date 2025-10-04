import React from 'react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-charcoal text-cream/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h2 className="font-serif text-2xl text-cream mb-4">
              Firefly Lakehouse
            </h2>
            <p className="mb-6 max-w-md">
              A tranquil lakeside retreat where nature and luxury meet to create
              unforgettable experiences. Escape the ordinary and reconnect with
              what matters.
            </p>
            <p className="text-sm">
              © {currentYear} Firefly Lakehouse. All rights reserved.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#accommodations" className="hover:text-amber transition-colors">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-amber transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Policies */}
          <div>
            <h3 className="font-serif text-lg text-cream mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center">
          <p>Designed with ❤️ for nature lovers and adventure seekers.</p>
        </div>
      </div>
    </footer>;
}