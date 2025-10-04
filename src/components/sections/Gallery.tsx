import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { XIcon } from 'lucide-react';
export function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [{
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/aa34940f-23c3-4fce-b041-b00c0ea0b232.jpeg?im_w=1440',
    alt: 'Patio dining space'
  }, {
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/5513ebde-1447-4cc9-9116-66d642fa0243.jpeg?im_w=1440',
    alt: 'Cabin interior'
  }, {
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/e50e0756-62e5-4b85-abea-85a45870f321.jpeg?im_w=1440',
    alt: 'Kayaking on the lake'
  }, {
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/a7d29c24-1e3b-4576-b42e-254c6edc0270.jpeg?im_w=1440',
    alt: 'Forest trail'
  }, {
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/f2b04b4e-cdc1-41d6-8855-f811b9e0b2ef.jpeg?im_w=1440',
    alt: 'Campfire'
  }, {
    url: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/d45ca731-319b-4fc5-91cd-17e06a1d8886.jpeg?im_w=1440',
    alt: 'Morning mist on the lake'
  }];
  return <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-serif text-4xl text-charcoal mb-6">Gallery</h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Glimpses of the magic that awaits you at Firefly Lakehouse. Each
            image tells a story of connection, relaxation, and natural beauty.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => <div key={index} className={`overflow-hidden rounded-lg cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{
          transitionDelay: `${index * 100}ms`
        }} onClick={() => setSelectedImage(image.url)}>
              <img src={image.url} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" />
            </div>)}
        </div>
      </div>
      {/* Lightbox */}
      {selectedImage && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-amber" onClick={() => setSelectedImage(null)}>
            <XIcon size={32} />
          </button>
          <img src={selectedImage} alt="Enlarged view" className="max-w-full max-h-[90vh] object-contain" onClick={e => e.stopPropagation()} />
        </div>}
    </section>;
}