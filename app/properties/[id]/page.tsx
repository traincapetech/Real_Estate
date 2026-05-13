"use client";
import { useParams, useRouter } from 'next/navigation';
import { allProperties } from "../../components/data";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Wifi, Car, Waves, ShieldCheck, 
  Wind, Dumbbell, Trees, Zap, 
  CheckCircle2, Phone, Mail, User 
} from 'lucide-react';

export default function PropertyDetails() {
  const params = useParams();
  const router = useRouter();
  
  const property = allProperties.find((p) => p.id === Number(params.id));

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-slate-900">Property not found</h2>
        <Link href="/properties" className="mt-4 text-amber-600 font-bold hover:underline">
          Back to listings
        </Link>
      </div>
    );
  }

  // Helper to render icons for amenities
  const getAmenityIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('wifi')) return <Wifi size={20} />;
    if (n.includes('parking')) return <Car size={20} />;
    if (n.includes('pool')) return <Waves size={20} />;
    if (n.includes('security')) return <ShieldCheck size={20} />;
    if (n.includes('ac') || n.includes('air')) return <Wind size={20} />;
    if (n.includes('gym')) return <Dumbbell size={20} />;
    if (n.includes('garden') || n.includes('park')) return <Trees size={20} />;
    if (n.includes('power') || n.includes('backup')) return <Zap size={20} />;
    return <CheckCircle2 size={20} />;
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-white border-b overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full"
            >
              <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                {property.type}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 leading-tight">
                {property.title}
              </h1>
              <p className="text-slate-500 flex items-center mt-3 font-medium text-lg">
                <span className="mr-2 text-amber-500">📍</span> {property.location}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-auto p-6 bg-slate-900 rounded-[2rem] text-right"
            >
              <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Asking Price</p>
              <p className="text-3xl md:text-4xl font-black text-amber-400">₹{property.price}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT: CONTENT AREA */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px] relative border-8 border-white"
            >
              <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              {[
                { label: 'Beds', val: property.beds, icon: '🛏️' },
                { label: 'Baths', val: property.baths, icon: '🚿' },
                { label: 'Sq.Ft', val: property.sqft, icon: '📏' }
              ].map((stat, i) => (
                <div key={i} className="text-center border-r last:border-0 border-slate-100">
                  <span className="block text-2xl mb-1">{stat.icon}</span>
                  <p className="text-slate-400 text-[10px] uppercase font-black tracking-tighter">{stat.label}</p>
                  <p className="text-xl font-black text-slate-900">{stat.val || 'N/A'}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <motion.div 
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-6 italic">About this Property</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{property.description}</p>
            </motion.div>

            {/* Amenities Section */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-8 italic">World-Class Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {property.amenities?.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 group hover:bg-amber-50 transition-colors">
                    <div className="text-amber-500 group-hover:scale-110 transition-transform">
                      {getAmenityIcon(amenity)}
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: ENQUIRY FORM SIDEBAR */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 space-y-6"
            >
              {/* The Form Card */}
              <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-slate-100">
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-400 rounded-2xl mb-4 shadow-lg shadow-amber-200">
                    <Mail className="text-slate-950" size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 italic">Enquire Now</h3>
                  <p className="text-slate-400 text-sm mt-2 font-medium">Get exclusive details & schedule a visit</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all font-medium" 
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all font-medium" 
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all font-medium" 
                    />
                  </div>
                  <textarea 
                    rows={3} 
                    placeholder="I'm interested in..."
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all font-medium resize-none"
                  ></textarea>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-slate-800 transition-all uppercase tracking-widest text-sm"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>

              {/* Direct Contact Card */}
              <div className="bg-amber-400 p-8 rounded-[2.5rem] text-center shadow-lg shadow-amber-100">
                <p className="text-slate-900 font-black uppercase text-[10px] tracking-widest mb-2">Or Call Specialist</p>
                <a href="tel:+919876543210" className="text-2xl font-black text-slate-950 block hover:scale-105 transition-transform">
                  +91 98765 43210
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}