import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Wifi, Flame, Coffee, Wind, Droplets, Users, Home, MapPin, Star } from 'lucide-react';
import { Footer } from '../Footer';

interface Amenity {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
}

interface Accommodation {
  title: string;
  subtitle: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  description: string;
  images: string[];
  capacity: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: Amenity[];
  highlights: string[];
  houseRules: string[];
}

type AccommodationData = {
  [key: string]: Accommodation;
};

const accommodationsData: AccommodationData = {
  'firefly-log-cabin': {
    title: 'Firefly Log Cabin',
    subtitle: 'Lakefront Luxury with Stunning Views',
    price: 249,
    rating: 4.9,
    reviews: 127,
    location: 'Lakeside Trail, Whispering Pines',
    description: 'Experience the perfect blend of rustic charm and modern comfort in our spacious Firefly Log Cabin. Wake up to breathtaking lake views, enjoy your morning coffee on the private deck, and spend your days fishing from your own dock or exploring the surrounding wilderness.',
    images: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/25a7b70e-3047-43bd-ad4f-fa71350e2355.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/865bc6fe-1bc5-4d6d-9257-0cae22558f37.jpeg?im_w=1440',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/9799f63a-760a-435f-9832-4c14ea496930.jpeg?im_w=1440',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/aa34940f-23c3-4fce-b041-b00c0ea0b232.jpeg?im_w=1440',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/aa34940f-23c3-4fce-b041-b00c0ea0b232.jpeg?im_w=1440'

    ],
    capacity: '4-6 guests',
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: [
      { icon: Wifi, name: 'High-Speed Wi-Fi' },
      { icon: Flame, name: 'Stone Fireplace' },
      { icon: Coffee, name: 'Full Kitchen' },
      { icon: Droplets, name: 'Private Dock' },
      { icon: Wind, name: 'Air Conditioning' },
      { icon: Home, name: 'Private Deck' }
    ],
    highlights: [
      'Direct lake access with private dock',
      'Floor-to-ceiling windows with panoramic views',
      'Fully equipped gourmet kitchen',
      'Cozy stone fireplace for cool evenings',
      'Master bedroom with ensuite bathroom',
      'Outdoor fire pit and barbecue area'
    ],
    houseRules: [
      'Check-in: 3:00 PM - 9:00 PM',
      'Checkout: 11:00 AM',
      'No smoking',
      'No pets',
      'Quiet hours: 10:00 PM - 8:00 AM'
    ]
  },
  'the-malachite-treehouse': {
    title: 'The Malachite Treehouse',
    subtitle: 'Cozy Forest Retreat',
    price: 199,
    rating: 4.8,
    reviews: 94,
    location: 'Pine Grove Circle, Whispering Pines',
    description: 'Escape to tranquility in our charming Malachite Treehouse, nestled among towering pines. This intimate cottage offers the perfect blend of privacy and comfort, with forest views that transport you to another world.',
    images: [
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1222162999182870462/original/a83a9a79-db28-4940-9ef6-1b7f80a7bc4c.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1222162999182870462/original/84dae9e6-2c56-4558-8734-24c5ad3c8bcc.jpeg?im_w=720',
    //   'https://a0.muscache.com/im/pictures/hosting/Hosting-1222162999182870462/original/314b387e-4c85-4842-ae41-a758ec1acc66.jpeg?im_w=720',
    //   'https://a0.muscache.com/im/pictures/hosting/Hosting-1222162999182870462/original/63e48702-dd3b-4883-bf71-0a096c4d05b0.jpeg?im_w=1200',
    ],
    capacity: '2-4 guests',
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: [
      { icon: Wifi, name: 'Wi-Fi' },
      { icon: Flame, name: 'Fire Pit' },
      { icon: Coffee, name: 'Kitchenette' },
      { icon: Droplets, name: 'Outdoor Shower' },
      { icon: Wind, name: 'Screened Porch' },
      { icon: Home, name: 'Private Entrance' }
    ],
    highlights: [
      'Secluded forest setting',
      'Screened porch with hammock',
      'Unique outdoor shower experience',
      'Fire pit for evening gatherings',
      'Compact kitchenette with essentials',
      'Perfect for couples or small families'
    ],
    houseRules: [
      'Check-in: 3:00 PM - 8:00 PM',
      'Checkout: 11:00 AM',
      'No smoking',
      'Pets considered (contact host)',
      'Quiet hours: 10:00 PM - 7:00 AM'
    ]
  },
  'coffee-farm': {
    title: 'Coffee Farm',
    subtitle: 'Luxury Treehouse Experience',
    price: 279,
    rating: 5.0,
    reviews: 68,
    location: 'Canopy Heights, Whispering Pines',
    description: 'Indulge in an unforgettable luxury treehouse experience. Our handcrafted Coffee Farm treehouse offers panoramic views, upscale amenities, and a romantic atmosphere that makes every moment special.',
    images: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1189559305118239162/original/2ceea9bd-1ce6-4984-bfd2-3078a3bc2686.jpeg?im_w=1440',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1189559305118239162/original/25a7b70e-3047-43bd-ad4f-fa71350e2355.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/hosting/Hosting-1222162999182870462/original/84dae9e6-2c56-4558-8734-24c5ad3c8bcc.jpeg?im_w=1440',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-1189559305118239162/original/2ceea9bd-1ce6-4984-bfd2-3078a3bc2686.jpeg?im_w=1440'
    ],
    capacity: '2 guests',
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      { icon: Wifi, name: 'Premium Wi-Fi' },
      { icon: Flame, name: 'Luxury Bath' },
      { icon: Coffee, name: 'Breakfast Included' },
      { icon: Droplets, name: 'Private Balcony' },
      { icon: Wind, name: 'Climate Control' },
      { icon: Home, name: 'Room Service' }
    ],
    highlights: [
      'Handcrafted treehouse architecture',
      'Panoramic forest views from every window',
      'Luxury spa-style bathroom',
      'Private balcony with sunrise views',
      'Complimentary gourmet breakfast',
      'Perfect for romantic getaways'
    ],
    houseRules: [
      'Check-in: 4:00 PM - 8:00 PM',
      'Checkout: 12:00 PM',
      'No smoking',
      'Adults only (18+)',
      'Quiet hours: 9:00 PM - 8:00 AM'
    ]
  }
};

export default function AccommodationDetails() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<string>('firefly-log-cabin');
  const accommodation = accommodationsData[selectedAccommodation];
  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % accommodation.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + accommodation.images.length) % accommodation.images.length);
  };

  const calculateNights = (): number => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const nights = calculateNights();
  const totalPrice = nights * accommodation.price;

  return (
    <div className="min-h-screen bg-stone">
      {/* Header */}
      <div className="bg-charcoal/70 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-400">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
          <span className={`text-2xl font-serif text-cream`}>
            Firefly Lakehouse
          </span>
        </a>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-amber transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-amber transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-amber transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          <img
            src={accommodation.images[currentImage]}
            alt={`${accommodation.title} - Image ${currentImage + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
            {currentImage + 1} / {accommodation.images.length}
          </div>
        </div>
      )}

      {/* Hero Image Grid */}
<div className="container mx-auto px-4 py-8">
  <div
    className="
      grid gap-2 rounded-lg overflow-hidden 
      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      h-auto lg:h-[500px]
    "
  >
    {/* Main large image */}
    <div
      className="
        col-span-1 
        sm:col-span-2 
        lg:col-span-2 lg:row-span-2 
        cursor-pointer relative group overflow-hidden
      "
      onClick={() => setShowGallery(true)}
    >
      <img
        src={accommodation.images[0]}
        alt={accommodation.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
    </div>

    {/* Other images */}
    {accommodation.images.slice(1, 5).map((img: string, idx: number) => (
      <div
        key={idx}
        className="cursor-pointer relative group overflow-hidden h-full"
        onClick={() => {
          setCurrentImage(idx + 1);
          setShowGallery(true);
        }}
      >
        <img
          src={img}
          alt={`${accommodation.title} - ${idx + 2}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>
    ))}
  </div>

  {/* Button */}
  <button
    onClick={() => setShowGallery(true)}
    className="mt-4 px-6 py-2 bg-white/90 hover:bg-white text-charcoal rounded-lg transition-colors"
  >
    View All Photos
  </button>
</div>



      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Rating */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-400">
              <h1 className="font-serif text-4xl  mb-2">
                {accommodation.title}
              </h1>
              <p className="text-amber text-lg mb-4">{accommodation.subtitle}</p>
              <div className="flex items-center gap-6 /80">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-amber text-amber" />
                  <span className="font-medium">{accommodation.rating}</span>
                  <span className="/60">({accommodation.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{accommodation.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-400">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Users className="w-8 h-8 text-amber mx-auto mb-2" />
                  <div className="/60 text-sm">Guests</div>
                  <div className=" font-medium">{accommodation.capacity}</div>
                </div>
                <div className="text-center">
                  <Home className="w-8 h-8 text-amber mx-auto mb-2" />
                  <div className="/60 text-sm">Bedrooms</div>
                  <div className=" font-medium">{accommodation.bedrooms}</div>
                </div>
                <div className="text-center">
                  <Home className="w-8 h-8 text-amber mx-auto mb-2" />
                  <div className="/60 text-sm">Beds</div>
                  <div className=" font-medium">{accommodation.beds}</div>
                </div>
                <div className="text-center">
                  <Droplets className="w-8 h-8 text-amber mx-auto mb-2" />
                  <div className="/60 text-sm">Bathrooms</div>
                  <div className=" font-medium">{accommodation.bathrooms}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-400">
              <h2 className="font-serif text-2xl  mb-4">About This Space</h2>
              <p className="/80 leading-relaxed">{accommodation.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-400">
              <h2 className="font-serif text-2xl  mb-6">Amenities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {accommodation.amenities.map((amenity: Amenity, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 /80">
                    <amenity.icon className="w-6 h-6 text-amber" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-400">
              <h2 className="font-serif text-2xl  mb-6">Highlights</h2>
              <ul className="space-y-3">
                {accommodation.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 /80">
                    <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* House Rules */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-gray-400">
              <h2 className="font-serif text-2xl  mb-6">House Rules</h2>
              <ul className="space-y-3">
                {accommodation.houseRules.map((rule: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 /80">
                    <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-xl sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-charcoal">${accommodation.price}</span>
                  <span className="text-charcoal/60">/ night</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Check-in
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Check-out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {nights > 0 && (
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex justify-between text-charcoal/70">
                    <span>${accommodation.price} × {nights} nights</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-charcoal/70">
                    <span>Cleaning fee</span>
                    <span>$75</span>
                  </div>
                  <div className="flex justify-between text-charcoal/70">
                    <span>Service fee</span>
                    <span>${Math.round(totalPrice * 0.1)}</span>
                  </div>
                  <div className="border-t border-charcoal/20 pt-2 mt-2">
                    <div className="flex justify-between font-bold text-charcoal">
                      <span>Total</span>
                      <span>${totalPrice + 75 + Math.round(totalPrice * 0.1)}</span>
                    </div>
                  </div>
                </div>
              )}

              <button className="w-full bg-amber hover:bg-amber/90 text-charcoal font-medium py-3 rounded-lg transition-colors">
                Reserve Now
              </button>
              <p className="text-center text-sm text-charcoal/60 mt-3">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}