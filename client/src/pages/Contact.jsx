import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../constants';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to API
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="bg-warm-gray py-20 border-b border-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-warm-gray mb-6">Let's Talk About Your Project</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready for a free estimate? Call Brandy directly or fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-warm-gray mb-10">Get in Touch</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="accent-orange p-4 rounded-2xl text-white shadow-lg h-fit">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-warm-gray mb-1">Call for Quote</h4>
                    <p className="text-gray-500 mb-2">Speak directly with Brandy to schedule an estimate.</p>
                    <a href={`tel:${CONTACT_PHONE}`} className="text-2xl font-bold text-orange-600 hover:underline">{CONTACT_PHONE}</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="accent-orange p-4 rounded-2xl text-white shadow-lg h-fit">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-warm-gray mb-1">Email Us</h4>
                    <p className="text-gray-500 mb-2">For general inquiries and project details.</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-semibold text-warm-gray hover:text-orange-600 transition-colors">{CONTACT_EMAIL}</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="accent-orange p-4 rounded-2xl text-white shadow-lg h-fit">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-warm-gray mb-1">Business Hours</h4>
                    <ul className="text-gray-500">
                      <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
                      <li>Saturday: 9:00 AM – 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-16 bg-warm-gray rounded-3xl h-64 w-full flex items-center justify-center border-2 border-dashed border-warm overflow-hidden">
                <div className="text-center p-8">
                   <MapPin size={40} className="mx-auto text-gray-300 mb-4" />
                   <p className="text-gray-400 font-medium">Serving the Greater Metropolitan Area & Surrounding Suburbs</p>
                   <p className="text-xs text-gray-400 mt-2">(We come to you!)</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-warm-gray p-10 md:p-14 rounded-[3rem] shadow-xl border border-warm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in scale-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-warm-gray mb-4">Request Received!</h3>
                  <p className="text-lg text-gray-600 mb-8">Thanks for reaching out. Brandy will be in touch with you shortly to discuss your project.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="accent-orange text-white px-8 py-3 rounded-full font-bold shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-bold text-warm-gray mb-8">Request a Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-warm-gray mb-2 uppercase tracking-wider">Full Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-white border border-warm rounded-xl px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-warm-gray mb-2 uppercase tracking-wider">Email Address</label>
                        <input 
                          required
                          type="email" 
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-white border border-warm rounded-xl px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-warm-gray mb-2 uppercase tracking-wider">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          value={formState.phone}
                          onChange={(e) => setFormState({...formState, phone: e.target.value})}
                          className="w-full bg-white border border-warm rounded-xl px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all" 
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-warm-gray mb-2 uppercase tracking-wider">Project Description</label>
                      <textarea 
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-white border border-warm rounded-xl px-5 py-4 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none" 
                        placeholder="Tell us about your project... (e.g. Kitchen remodel, new siding, roof repair)"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full accent-orange text-white py-5 rounded-xl text-lg font-bold hover:accent-orange-hover shadow-2xl transition-all flex items-center justify-center gap-3"
                    >
                      <Send size={20} />
                      Submit Request
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      By submitting this form, you agree to be contacted via phone or email for a free estimate.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

