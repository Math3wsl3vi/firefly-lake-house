import React, { memo } from 'react';
import { useInView } from 'react-intersection-observer';
import { CompassIcon, SunriseIcon, FlameIcon, BookOpenIcon, UtensilsIcon, Sailboat } from 'lucide-react';
interface ExperienceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}
function ExperienceCard({
  icon,
  title,
  description,
  delay
}: ExperienceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <div ref={ref} className={`bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transition-all duration-700 hover:shadow-xl group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
    transitionDelay: `${delay}ms`
  }}>
      <div className="w-16 h-16 bg-forest rounded-lg flex items-center justify-center mb-6 text-cream group-hover:bg-amber group-hover:text-charcoal transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-charcoal mb-3">{title}</h3>
      <p className="text-charcoal-light">{description}</p>
    </div>;
}
export function Experiences() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const experiences = [{
    icon: <CompassIcon size={32} />,
    title: 'Hiking Trails',
    description: 'Explore miles of marked trails through ancient forests, with views of mountains and wildlife.'
  }, {
    icon: <Sailboat size={32} />,
    title: 'Kayaking & Canoeing',
    description: 'Paddle across our crystal-clear lake at your own pace, with complimentary equipment for guests.'
  }, {
    icon: <SunriseIcon size={32} />,
    title: 'Sunrise Yoga',
    description: 'Start your day with lakeside yoga sessions, suitable for all levels and led by local instructors.'
  }, {
    icon: <FlameIcon size={32} />,
    title: 'Evening Bonfires',
    description: "Gather around our community fire pit for storytelling, s'mores, and stargazing."
  }, {
    icon: <BookOpenIcon size={32} />,
    title: 'Reading Nooks',
    description: 'Find your perfect spot to curl up with a book from our curated library of nature writings.'
  }, {
    icon: <UtensilsIcon size={32} />,
    title: 'Farm-to-Table Dining',
    description: 'Experience seasonal menus featuring ingredients from our garden and local producers.'
  }];
  return <section id="experiences" className="py-20 bg-wood bg-cover bg-fixed">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 cursor-pointer ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-serif text-4xl mb-6">Experiences</h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className=" max-w-2xl mx-auto">
            At Firefly Lakehouse, we believe in creating moments that become
            memories. Discover the activities that make our property a true
            retreat for the soul.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => <ExperienceCard key={index} {...experience} delay={index * 100} />)}
        </div>
      </div>
    </section>;
}