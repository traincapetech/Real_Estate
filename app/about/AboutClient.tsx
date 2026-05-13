"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Trophy, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "2,400+", label: "Properties", icon: <Trophy className="w-5 h-5" /> },
  { value: "1,800+", label: "Clients", icon: <Users className="w-5 h-5" /> },
  { value: "15+",     label: "Years", icon: <Calendar className="w-5 h-5" /> },
  { value: "98%",     label: "Satisfaction", icon: <CheckCircle2 className="w-5 h-5" /> },
];

const values = [
  { title: "Transparency", desc: "No hidden costs, no complex jargon. Just honest real estate advice from start to finish." },
  { title: "Expertise", desc: "Our agents possess deep knowledge of the Delhi NCR, Mumbai, and Bangalore luxury markets." },
  { title: "Commitment", desc: "We stay with you from the very first viewing to the final registration and beyond." },
];

const team = [
  { name: "Sarah Mitchell", role: "CEO & Founder", img: "https://i.pravatar.cc/150?u=sarah" },
  { name: "James Carter",   role: "Head of Sales", img: "https://i.pravatar.cc/150?u=james" },
  { name: "Priya Sharma",   role: "Senior Agent", img: "https://i.pravatar.cc/150?u=priya" },
  { name: "Leo Nguyen",     role: "Property Consultant", img: "https://i.pravatar.cc/150?u=leo" },
];

export default function AboutClient() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pb-32 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center md:text-left">
            <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Heritage</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Redefining <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-amber-600">Property Luxury.</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium">
              Since 2010, <span className="text-slate-900 font-bold">Bold India Group</span> has been the bridge between vision and reality for India's most prestigious addresses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-xl shadow-slate-200">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative group px-4 md:px-0">
            <div className="absolute -inset-4 bg-amber-400/10 rounded-[3rem] blur-3xl transition-all group-hover:bg-amber-400/20"></div>
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" alt="Modern Office" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
                <p className="text-5xl font-black text-white mb-2 tracking-tighter">{s.value}</p>
                <p className="text-slate-400 uppercase tracking-widest text-xs font-bold">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Built on Unwavering Principles.</h2>
              <div className="h-1.5 w-20 bg-amber-400 rounded-full"></div>
            </div>
            <p className="text-slate-500 text-base md:text-lg max-w-sm italic">We don&apos;t just sell square footage; we curate the backdrop for your life&apos;s best moments.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-8 font-black text-xl">0{i + 1}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">The Experts Behind the Name</h2>
            <p className="text-slate-500">Dedicated professionals with over a century of combined experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-center">
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 bg-slate-900 rounded-full translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"></div>
                  <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                <h3 className="font-bold text-xl text-slate-900">{m.name}</h3>
                <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mt-2">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mx-6 mb-24 max-w-7xl lg:mx-auto">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 py-20 px-8 md:px-16 border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-amber-400 font-bold tracking-[0.3em] text-xs uppercase mb-6 block">Your Legacy Starts Here</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Get Your Dream Home <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">With Bold India Group.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-lg mx-auto lg:mx-0">Experience real estate the way it was meant to be—seamless, exclusive, and tailored to your vision.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Link href="/properties" className="group relative inline-flex items-center justify-center bg-amber-400 text-slate-950 px-10 py-5 rounded-2xl font-black transition-all hover:bg-amber-300 active:scale-95 shadow-xl">
                <span className="uppercase tracking-widest text-sm">View Listings</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-slate-700 text-white px-10 py-5 rounded-2xl font-black transition-all hover:bg-white hover:text-slate-950 hover:border-white uppercase tracking-widest text-sm">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
