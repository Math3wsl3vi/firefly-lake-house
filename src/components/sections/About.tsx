import React, { useEffect, useState, memo } from 'react';
import { useInView } from 'react-intersection-observer';
export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  return <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/b91341d4-9adc-4d18-ae5b-0d5cf9111eac.jpeg?im_w=1440" alt="Peaceful lake view" className="w-full h-full object-cover" />
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-24 h-24 border-2 border-amber opacity-70 -z-10"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 border-2 border-forest opacity-70 -z-10"></div>
          </div>
          {/* Text Content */}
          <div className="flex flex-col">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-amber mb-6"></div>
            <p className="text-charcoal-light mb-6 leading-relaxed">
              Nestled on the tranquil shores of Lake Serenity, Firefly Lakehouse
              began as a family retreat in 1978. What started as a simple cabin
              has evolved into a sanctuary where nature and comfort blend
              seamlessly.
            </p>
            <p className="text-charcoal-light mb-6 leading-relaxed">
              Our property spans 12 acres of pristine woodland, with 400 feet of
              private shoreline. Each cabin and amenity has been thoughtfully
              designed to honor the natural beauty that surrounds us while
              providing the comforts that make a getaway truly restorative.
            </p>
            <p className="text-charcoal-light mb-6 leading-relaxed">
              We believe in disconnecting to reconnect. Here, the gentle lapping
              of water against the shore replaces the ping of notifications. The
              dance of fireflies outshines any screen. And conversations around
              a crackling fire create memories that last far longer than any
              social media post.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Emma Thompson" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium text-charcoal">Emma Thompson</p>
                <p className="text-sm text-charcoal-light">Founder & Host</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}