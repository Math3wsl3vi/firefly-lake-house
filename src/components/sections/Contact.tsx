import React, { lazy } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../Button';
import { MapPinIcon, PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    alert('Thank you for your message! We will get back to you soon.');
  };
  return <section id="contact" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-serif text-4xl text-cream mb-6">
            Contact & Location
          </h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Have questions or ready to book your stay? Reach out to us and we'll
            be happy to assist you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="font-serif text-2xl text-cream mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-cream mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-amber" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-cream mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-amber" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-cream mb-2">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-amber" placeholder="Booking Inquiry" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-cream mb-2">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-amber" placeholder="How can we help you?" required></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          {/* Map and Contact Info */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{
          transitionDelay: '200ms'
        }}>
            {/* Map Embed */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden h-64 mb-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654248310126!2d-87.63116532412863!3d41.878113666162324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca3e2d9b6ef%3A0xb9d71a8e97cc8be8!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sca!4v1694757026948!5m2!1sen!2sca" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Firefly Lakehouse Location"></iframe>
            </div>
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="font-serif text-2xl text-cream mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="text-amber mr-4 mt-1" size={20} />
                  <div>
                    <p className="text-cream">123 Lakeside Drive</p>
                    <p className="text-cream/80">Pine Valley, WI 54501</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="text-amber mr-4" size={20} />
                  <p className="text-cream">(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <MailIcon className="text-amber mr-4" size={20} />
                  <p className="text-cream">info@fireflylakehouse.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-serif text-lg text-cream mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-cream hover:text-amber transition-colors">
                    <InstagramIcon size={24} />
                  </a>
                  <a href="#" className="text-cream hover:text-amber transition-colors">
                    <FacebookIcon size={24} />
                  </a>
                  <a href="#" className="text-cream hover:text-amber transition-colors">
                    <TwitterIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}