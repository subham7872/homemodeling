import React, { useState } from 'react';
import { GALLERY_PROJECTS } from '../constants';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Kitchen', 'Bathroom', 'Roof & Siding', 'Decks'];

  const filteredProjects = filter === 'All' 
    ? GALLERY_PROJECTS 
    : GALLERY_PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-warm-gray py-20 border-b border-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-warm-gray mb-6">Project Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the transformations. From aging structures to modern living spaces.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-warm">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat 
                  ? 'accent-orange text-white shadow-lg' 
                  : 'bg-warm-gray text-warm-gray hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative group rounded-3xl overflow-hidden shadow-lg h-[400px]">
                    <img src={project.beforeImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Before" />
                    <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-sm font-bold tracking-widest uppercase">Before</div>
                  </div>
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                    <img src={project.afterImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="After" />
                    <div className="absolute top-6 left-6 accent-orange text-white px-4 py-1.5 rounded-lg text-sm font-bold tracking-widest uppercase">After</div>
                  </div>
                </div>
                <div className="lg:w-2/5 text-center lg:text-left">
                  <span className="text-orange-600 font-bold tracking-widest uppercase text-xs mb-4 block">{project.category}</span>
                  <h2 className="text-4xl font-bold text-warm-gray mb-6">{project.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium text-gray-400">
                    <span>• Design Consultation</span>
                    <span>• Full Demo</span>
                    <span>• Professional Finish</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Promo */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-warm-gray mb-8">Want to see more recent work?</h2>
          <p className="text-gray-500 mb-10">We post daily updates from our active job sites on social media.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="flex items-center gap-2 font-bold text-warm-gray hover:text-orange-600 transition-colors">
              <span className="p-2 bg-white rounded-full shadow-md">FB</span> Facebook Page
            </a>
            <a href="#" className="flex items-center gap-2 font-bold text-warm-gray hover:text-orange-600 transition-colors">
              <span className="p-2 bg-white rounded-full shadow-md">IG</span> Instagram Feed
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

