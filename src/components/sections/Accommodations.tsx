import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '../Button';
interface AccommodationCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  delay: number;
}
function AccommodationCard({
  title,
  description,
  image,
  price,
  features,
  delay
}: AccommodationCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <div ref={ref} className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 hover:shadow-xl group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-amber text-charcoal px-4 py-1 rounded-full font-medium">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl text-charcoal mb-3">{title}</h3>
        <p className="text-charcoal-light mb-4">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => <li key={index} className="flex items-center text-sm text-charcoal-light">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber mr-2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {feature}
            </li>)}
        </ul>
        <Button variant="outline" fullWidth>
          View Details
        </Button>
      </div>
    </div>;
}
export function Accommodations() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const accommodations = [{
    title: 'Lakefront Cabin',
    description: 'Wake up to stunning lake views in this spacious cabin with private deck and direct water access.',
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/25a7b70e-3047-43bd-ad4f-fa71350e2355.jpeg?im_w=1200',
    price: 'From $249/night',
    features: ['Sleeps 4-6', 'Full Kitchen', 'Private Dock', 'Fireplace', 'Wi-Fi']
  }, {
    title: 'The Malachite Treehouse',
    description: 'Nestled among towering pines, this cozy cottage offers privacy and tranquility with forest views.',
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1222162999182870462/original/84dae9e6-2c56-4558-8734-24c5ad3c8bcc.jpeg?im_w=1440',
    price: 'From $199/night',
    features: ['Sleeps 2-4', 'Kitchenette', 'Outdoor Shower', 'Fire Pit', 'Screened Porch']
  }, {
    title: 'Coffee Farm',
    description: 'Experience luxury among the treetops in our handcrafted treehouse with panoramic views.',
    image: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1189559305118239162/original/2ceea9bd-1ce6-4984-bfd2-3078a3bc2686.jpeg?im_w=1440',
    price: 'From $279/night',
    features: ['Sleeps 2', 'Luxury Bath', 'Private Balcony', 'Breakfast Included', 'Unique Experience']
  }];
  return <section id="accommodations" className="py-20 bg-stone bg-cover bg-center">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-serif text-4xl text-cream mb-6">
            Accommodations
          </h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-cream/90 max-w-2xl mx-auto">
            Each of our accommodations offers a unique experience, blending
            rustic charm with modern comforts. Choose your perfect retreat and
            prepare for a stay that feels like coming home to nature.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => <AccommodationCard key={index} {...accommodation} delay={index * 200} />)}
        </div>
      </div>
    </section>;
}