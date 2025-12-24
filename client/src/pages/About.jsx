import React from 'react';
import { TEAM } from '../constants';
import { UserCheck, Clock, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-warm-gray py-20 border-b border-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-warm-gray mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A tradition of excellence in home remodeling, serving our community with pride since 2006.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" 
                alt="Craftsman at work" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-warm-gray mb-8">Concept to Completion</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Start to Finish Home Remodeling, we believe that your home is your sanctuary. Since our founding in 2006, our mission has been to provide homeowners with a stress-free remodeling experience that prioritizes quality craftsmanship and honest communication.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                We aren't just contractors; we are partners in your project. Whether it's a small gutter repair or a massive kitchen overhaul, Mike, Brandy, and our dedicated team bring the same level of precision and care to every square inch of your home.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <Clock className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-warm-gray">Timely Delivery</h4>
                    <p className="text-sm text-gray-500">We value your schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="text-orange-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-warm-gray">Human Touch</h4>
                    <p className="text-sm text-gray-500">Direct contact always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-warm-gray mb-4">Meet the Team</h2>
            <div className="w-20 h-1 accent-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">The faces behind the craftsmanship.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-96 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-warm-gray">{member.name}</h3>
                      <p className="text-orange-600 font-semibold">{member.role}</p>
                    </div>
                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">{member.experience}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">Why Homeowners Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <UserCheck />, title: 'Personalized', text: 'Direct line to Brandy for all your needs.' },
              { icon: <Clock />, title: 'Reliable', text: 'We show up on time and stick to the budget.' },
              { icon: <Award />, title: 'Master Craft', text: 'Mike ensures every detail is flawless.' },
              { icon: <Heart />, title: 'Family Owned', text: 'Local roots and community values.' },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-orange-600 mb-6 p-4 bg-orange-50 rounded-2xl">{React.cloneElement(v.icon, { size: 40 })}</div>
                <h4 className="text-xl font-bold mb-2">{v.title}</h4>
                <p className="text-gray-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

