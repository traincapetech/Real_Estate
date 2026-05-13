"use client";

import { useState, useEffect } from 'react';
import { PropertyCard } from './components/PropertyCard';
import Testimonials from './testimonials/testimonial';
import Link from 'next/link';
import { MapPin, Home as HomeIcon, Shield, Zap } from 'lucide-react';
import { allProperties, Property } from './components/data';
import { motion, AnimatePresence } from 'framer-motion';

const featured: Property[] = allProperties.slice(0, 3);

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200",
  "https://images.unsplash.com/photo-1722062767419-ff110d4e7db7?auto=format&fit=crop&w=1200"
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <main>
        
        {/* --- HERO SECTION --- 
            Using bg-slate-950 so that during the cross-fade transition, 
            the background is dark, preventing large white flashes.
        */}
        <section className="relative h-[92vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
          
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 w-full h-full"
              >
                <motion.img
                  src={HERO_IMAGES[index]}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3.5, ease: "linear" }}
                  // Kept brightness higher (0.6) so it's not "too dark", 
                  // but enough to make white text pop.
                  className="w-full h-full object-cover brightness-[0.6] transition-all"
                  alt="Luxury Real Estate"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Subtle Gradient: Keeps the bottom of the hero blended with the next section */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20"></div>
          </div>

          {/* Hero Content: White text for high contrast against the image */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase drop-shadow-2xl">
                FIND YOUR HOUSE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 italic">
                  WITH US
                </span>
              </h1>

              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg">
                Experience India's most exclusive residences through a cinematic lens. Transparent, bold, and breathtaking.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/properties" className="w-full sm:w-auto bg-amber-400 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl">
                  Explore Collection
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-10 flex gap-3 z-20">
            {HERO_IMAGES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? "w-10 bg-amber-400" : "w-3 bg-white/30"}`}
              />
            ))}
          </div>
        </section>

        {/* --- CATEGORIES SECTION --- */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Curated Portfolio</h2>
                <div className="h-2 w-24 bg-amber-400 rounded-full mx-auto md:mx-0"></div>
              </div>
              <Link href="/properties" className="text-slate-600 font-black hover:text-amber-600 transition-colors uppercase text-xs tracking-[0.2em] pb-2 border-b-2 border-amber-100 hover:border-amber-400">
                View All Listings →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Luxury Villas', count: '120+', icon: <HomeIcon /> },
                { name: 'Modern Flats', count: '450+', icon: <Zap /> },
                { name: 'Commercial', count: '85+', icon: <Shield /> },
                { name: 'Plots/Land', count: '200+', icon: <MapPin /> },
              ].map((cat) => (
                <motion.div 
                  key={cat.name}
                  whileHover={{ y: -12 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-xl mb-2">{cat.name}</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{cat.count} Listings</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURED PROPERTIES --- */}
        <section className="max-w-7xl mx-auto py-24 px-6 bg-white">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter uppercase">Signature Homes</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
              A handpicked selection of our most requested properties available this month.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        </section>

        {/* --- TRUST & QUALITY SECTION --- */}
        <section className="bg-slate-50 py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 leading-tight uppercase">
                The Bold <br /> 
                <span className="text-amber-500">Standard</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: 'Verified Listings', desc: 'Every property goes through a 50-point verification check.' },
                  { title: 'Expert Guidance', desc: 'Local experts to guide you from viewing to registration.' },
                  { title: 'Zero Brokerage', desc: 'Transparent deals with direct developer/owner pricing.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center font-black text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-2xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800" 
                className="rounded-[3.5rem] shadow-2xl border-4 border-white"
                alt="Professional Consultation"
              />
            </motion.div>
          </div>
        </section>

        <Testimonials />

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-32 px-6 bg-white">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="max-w-6xl mx-auto bg-amber-400 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-amber-200 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 italic tracking-tighter uppercase">Ready to make a move?</h2>
              <p className="text-slate-900 text-xl mb-12 font-bold max-w-xl mx-auto">Join 1,800+ families who found their peace with Bold India Group.</p>
              <Link href="/contact" className="inline-block bg-slate-950 text-white px-14 py-6 rounded-2xl font-black hover:bg-slate-800 transition-all uppercase tracking-[0.2em] shadow-2xl">
                Contact A Specialist
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}