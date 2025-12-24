import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Phone } from 'lucide-react';
import { CONTACT_PHONE, SERVICES, GALLERY_PROJECTS } from '../constants';
import { getIcon } from '../utils/icons';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful Modern Kitchen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-600/90 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 animate-in slide-in-from-left-4">
              Since 2006
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              From Concept to Completion — <span className="text-orange-500">Every Job Done Right</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
              Trust your home to the professionals. We deliver high-quality craftsmanship for kitchens, baths, and whole-home renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="accent-orange text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:accent-orange-hover shadow-2xl transition-all hover:-translate-y-1"
              >
                Request a Free Estimate
                <ArrowRight size={20} />
              </Link>
              <a 
                href={`tel:${CONTACT_PHONE}`}
                className="bg-white text-warm-gray px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-100 shadow-xl transition-all"
              >
                <Phone size={20} className="text-orange-600" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-warm-gray py-10 border-y border-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-70 grayscale">
             <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 className="text-orange-600" /> Licensed & Insured</div>
             <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 className="text-orange-600" /> BBB Accredited</div>
             <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 className="text-orange-600" /> Local Family Owned</div>
             <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 className="text-orange-600" /> 18+ Years Experience</div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-gray mb-4">Our Services</h2>
            <div className="w-24 h-1.5 accent-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer full-spectrum home renovation and repair services for interior and exterior needs. No job is too big or too small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="group bg-warm-gray p-10 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-warm">
                <div className="accent-orange text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-warm-gray">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to="/services" className="text-orange-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Highlight */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6">Visible Results, Reliable Quality</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Take a look at one of our recent kitchen transformations. We manage everything from demo to the final coat of paint, ensuring a stress-free experience for you.
              </p>
              <ul className="space-y-4 mb-10">
                {['Custom Cabinetry', 'Luxury Granite Counters', 'Smart Lighting', 'Open Concept Layouts'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-warm-gray font-medium">
                    <CheckCircle2 className="text-orange-600" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/gallery" className="accent-orange text-white px-10 py-4 rounded-full font-bold shadow-lg hover:accent-orange-hover transition-all inline-block">
                View All Projects
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative group overflow-hidden rounded-2xl shadow-xl h-64">
                      <img src={GALLERY_PROJECTS[0].beforeImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Before" />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-bold">BEFORE</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-80">
                      <img src={GALLERY_PROJECTS[0].afterImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="After" />
                      <div className="absolute top-4 left-4 accent-orange text-white px-3 py-1 rounded-md text-xs font-bold">AFTER</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#4A443F] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} fill="#D97706" className="text-orange-500" />)}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium italic mb-10 leading-snug">
            "Brandy and Mike were amazing to work with. They kept us informed every step of the way during our bathroom remodel. The attention to detail was exceptional, and the job was finished exactly when they said it would be."
          </blockquote>
          <cite className="not-italic font-bold text-orange-500 text-lg">— Sarah M., Happy Homeowner</cite>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-4xl md:text-5xl font-bold text-warm-gray mb-8">Ready to Build Your Dream Home?</h2>
           <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
             Contact Brandy today for a free, personalized quote. We handle projects of all sizes with the same dedication to quality.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <a href={`tel:${CONTACT_PHONE}`} className="accent-orange text-white px-10 py-5 rounded-full text-xl font-bold hover:accent-orange-hover shadow-xl transition-all flex items-center justify-center gap-3">
               <Phone /> Call Brandy: {CONTACT_PHONE}
             </a>
             <Link to="/contact" className="bg-warm-gray text-warm-gray px-10 py-5 rounded-full text-xl font-bold hover:bg-gray-200 transition-all border border-warm">
               Request Free Estimate
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

