import {  PropertyCard } from './components/PropertyCard';
import Testimonials from './testimonials/testimonial';
import Link from 'next/link';
import { MapPin, Home as HomeIcon, Shield, Zap } from 'lucide-react';
import { allProperties, Property } from './components/data';

const featured: Property[] = allProperties.slice(0, 3);;

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1920" 
              className="w-full h-full object-cover"
              alt="Luxury Estate"
            />
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 max-w-5xl px-6 text-center">
            <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
              Redefining Indian Real Estate
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Perfect Home</span> in India
            </h1>
            </div>
 
        </section>

        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-2">Explore Categories</h2>
                <div className="h-1.5 w-16 bg-amber-400 rounded-full"></div>
              </div>
              <Link href="/properties" className="text-slate-600 font-bold hover:text-amber-600 transition-colors uppercase text-sm tracking-widest">
                View All Properties →
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Luxury Villas', count: '120+', icon: <HomeIcon /> },
                { name: 'Modern Flats', count: '450+', icon: <Zap /> },
                { name: 'Commercial', count: '85+', icon: <Shield /> },
                { name: 'Plots/Land', count: '200+', icon: <MapPin /> },
              ].map((cat) => (
                <div key={cat.name} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-amber-400 hover:shadow-xl transition-all group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{cat.name}</h3>
                  <p className="text-slate-400 text-sm font-medium mt-1 uppercase tracking-tighter">{cat.count} Listings</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="max-w-7xl mx-auto py-24 px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Featured Listings</h2>
            <p className="text-slate-500 max-ws-2xl mx-auto italic">Handpicked premium residences that define modern living in India's metropolitan hubs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featured.map(prop => <PropertyCard key={prop.id} property={prop} />)}
          </div>

          <div className="mt-16 text-center">
             <Link href="/properties" className="inline-block border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-sm">
                Explore All Listings
             </Link>
          </div>
        </section>

        {/* Trust/Process Section */}
        <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Why Thousands Trust <br /> 
                <span className="text-amber-400">Bold India Group</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Verified Listings', desc: 'Every property goes through a 50-point verification check.' },
                  { title: 'Expert Guidance', desc: 'Local experts to guide you from viewing to registration.' },
                  { title: 'Zero Brokerage', desc: 'Transparent deals with direct developer/owner pricing.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center font-black text-slate-950">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800" 
                className="rounded-[3rem] shadow-2xl grayscale"
                alt="Meeting"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <p className="text-slate-950 font-black text-3xl">15+</p>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Years of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* CTA Section */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-amber-400 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-amber-200">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 italic">Ready to make a move?</h2>
              <p className="text-slate-800 text-lg mb-10 font-medium">Join 1,800+ families who found their peace with Bold India Group.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-slate-950 text-white px-12 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all uppercase tracking-widest shadow-xl">
                  Contact Specialist
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}