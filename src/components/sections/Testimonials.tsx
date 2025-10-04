import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  image: string;
}
const testimonials: TestimonialProps[] = [{
  quote: "Our stay at Firefly Lakehouse was nothing short of magical. The cabin was immaculate, the views breathtaking, and the fireflies at dusk created an enchanting atmosphere we'll never forget.",
  author: 'Sarah & Michael',
  location: 'Boston, MA',
  image: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
}, {
  quote: 'This place is a hidden gem. The perfect balance of rustic charm and modern comfort. We kayaked every morning and spent evenings by the fire. Already planning our return!',
  author: 'David Chen',
  location: 'Chicago, IL',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
}, {
  quote: "We came for our anniversary and couldn't have chosen a better place. The treehouse was a dream, the staff attentive without being intrusive, and the farm-to-table dinner was exceptional.",
  author: 'Emily & James',
  location: 'Portland, OR',
  image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}];
function TestimonialCard({
  quote,
  author,
  location,
  image
}: TestimonialProps) {
  return <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col h-full">
      <div className="mb-4">
        {/* Quote icon */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber/60">
          <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19H5M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-charcoal-light mb-6 flex-grow italic">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-medium text-charcoal">{author}</p>
          <p className="text-sm text-charcoal-light">{location}</p>
        </div>
      </div>
    </div>;
}
export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-serif text-4xl text-charcoal mb-6">
            Guest Experiences
          </h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our guests have to say
            about their stays at Firefly Lakehouse.
          </p>
        </div>
        {/* Desktop view - show all testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
          transitionDelay: `${index * 200}ms`
        }}>
              <TestimonialCard {...testimonial} />
            </div>)}
        </div>
        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div className="relative">
            {testimonials.map((testimonial, index) => <div key={index} className={`transition-opacity duration-500 ${currentIndex === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                <TestimonialCard {...testimonial} />
              </div>)}
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-amber w-6' : 'bg-charcoal/20'}`} onClick={() => setCurrentIndex(index)} aria-label={`View testimonial ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
}