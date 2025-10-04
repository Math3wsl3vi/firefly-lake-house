import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';
export function Booking() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    accommodation: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking request
    toast('Thank you for your booking request! We will contact you shortly to confirm your stay.');
  };
  return <section id="booking" className="py-20 relative overflow-hidden">
      {/* Background with gradient and firefly effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest to-charcoal z-0">
        {/* Generate some decorative firefly dots */}
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className={`absolute rounded-full bg-amber/60 animate-firefly-${i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'medium' : 'fast'}`} style={{
        width: `${Math.random() * 6 + 2}px`,
        height: `${Math.random() * 6 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        boxShadow: `0 0 ${Math.random() * 10 + 5}px ${Math.random() * 3 + 1}px rgba(230, 167, 74, 0.6)`
      }}></div>)}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className={`max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8 shadow-xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl text-cream mb-4">
              Book Your Stay
            </h2>
            <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
            <p className="text-cream/90">
              Reserve your perfect getaway at Firefly Lakehouse and prepare for
              an unforgettable experience.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkIn" className="block text-cream mb-2">
                  Check-In Date
                </label>
                <input type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-amber" required />
              </div>
              <div>
                <label htmlFor="checkOut" className="block text-cream mb-2">
                  Check-Out Date
                </label>
                <input type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 text-cream placeholder-cream/60 focus:outline-none focus:ring-2 focus:ring-amber" required />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guests" className="block text-cream mb-2">
                  Number of Guests
                </label>
                <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-amber" required>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                </select>
              </div>
              <div>
                <label htmlFor="accommodation" className="block text-cream mb-2">
                  Accommodation
                </label>
                <select id="accommodation" name="accommodation" value={formData.accommodation} onChange={handleChange} className="w-full px-4 py-3 rounded-md bg-white/20 backdrop-blur-sm border border-white/30  focus:outline-none focus:ring-2 focus:ring-amber" required>
                  <option value="">Select an accommodation</option>
                  <option value="lakefront">Lakefront Cabin</option>
                  <option value="forest">Forest Cottage</option>
                  <option value="treehouse">Deluxe Treehouse</option>
                </select>
              </div>
            </div>
            <div className="text-center pt-4">
              <button className='bg-amber text-charcoal hover:bg-amber-light shadow-lg hover:shadow-xl inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 relative overflow-hidden' type="submit">Check Availability</button>
            </div>
          </form>
        </div>
      </div>
    </section>;
}