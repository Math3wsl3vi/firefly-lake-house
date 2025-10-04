import React, { useEffect, useState, memo } from 'react';
import { Button } from '../Button';
export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  // Generate random fireflies
  const generateFireflies = (count: number) => {
    const fireflies = [];
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 5 + 3;
      const duration = Math.random() * 3 + 2;
      fireflies.push({
        delay,
        top,
        left,
        size,
        duration
      });
    }
    return fireflies;
  };
  const fireflies = generateFireflies(20);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/25a7b70e-3047-43bd-ad4f-fa71350e2355.jpeg?im_w=1200" alt="Lakehouse at sunset" className="object-cover w-full h-full md:hidden block" />
         <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/865bc6fe-1bc5-4d6d-9257-0cae22558f37.jpeg?im_w=1440" alt="Lakehouse at sunset" className="object-cover w-full h-full hidden md:block" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal/40"></div>
      </div>
      {/* Firefly animation */}
      {fireflies.map((firefly, index) => <div key={index} className={`absolute rounded-full bg-amber-light/80 z-10 animate-firefly-${index % 3 === 0 ? 'slow' : index % 3 === 1 ? 'medium' : 'fast'}`} style={{
      width: `${firefly.size}px`,
      height: `${firefly.size}px`,
      top: `${firefly.top}%`,
      left: `${firefly.left}%`,
      animationDelay: `${firefly.delay}s`,
      boxShadow: `0 0 ${firefly.size * 2}px ${firefly.size / 2}px rgba(230, 167, 74, 0.8)`
    }}></div>)}
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className={`font-serif text-4xl md:text-6xl lg:text-7xl text-cream mb-6 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Escape. Relax. Reconnect
          <span className="block mt-2">at Firefly Lakehouse.</span>
        </h1>
        <p className={`text-lg md:text-xl text-cream/90 max-w-2xl mb-8 transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Experience the magic of nature in our tranquil lakeside retreat, where
          memories are made under starlit skies.
        </p>
        <div className={`transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <Button onClick={() => document.getElementById('booking')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Book Your Stay
          </Button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>;
}