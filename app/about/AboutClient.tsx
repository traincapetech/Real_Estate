"use client";
import Link from "next/link";
import { CheckCircle2, Users, Trophy, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "2,400+", label: "Properties", icon: <Trophy className="w-5 h-5" /> },
  { value: "1,800+", label: "Clients", icon: <Users className="w-5 h-5" /> },
  { value: "10+",     label: "Years", icon: <Calendar className="w-5 h-5" /> },
  { value: "98%",     label: "Satisfaction", icon: <CheckCircle2 className="w-5 h-5" /> },
];

const values = [
  { title: "Transparency", desc: "No hidden costs, no complex jargon. Just honest real estate advice from start to finish." },
  { title: "Expertise", desc: "Our agents possess deep knowledge of the Delhi NCR, Mumbai, and Bangalore luxury markets." },
  { title: "Commitment", desc: "We stay with you from the very first viewing to the final registration and beyond." },
];


export default function AboutClient() {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-[#141414]">
      {/* Editorial Heritage Image */}
      <section className="w-full pt-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-[#141414]/[0.08] bg-[#141414]"
          >
            <img
              src="/about.jpg"
              alt="About Bold India Group"
              className="w-full h-[260px] sm:h-[380px] md:h-[520px] object-cover brightness-[0.85]"
            />
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center md:text-left">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#9e7a44] mb-4 block">Our Heritage</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-[#141414] leading-[1.1] mb-6 tracking-tight">
              Curating India&apos;s <br className="hidden md:block" />
              <span className="italic font-light text-[#6e6b66]">Finest Architecture.</span>
            </h1>
            <p className="text-[#6e6b66] text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 font-normal">
              Since 2010, <span className="text-[#141414] font-medium">Bold India Group</span> has served as the private advisory bridge between discerning families and India&apos;s most prestigious residential addresses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="bg-[#141414] text-[#faf8f5] px-8 py-4 font-medium uppercase tracking-[0.2em] text-xs hover:bg-[#2c2c2c] transition-all">
                Connect With An Advisor
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative px-4 md:px-0">
            <div className="relative overflow-hidden border border-[#141414]/[0.08] shadow-xl">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800" alt="Modern Architecture Office" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section: Deep Ink Architectural Ribbon */}
      <section className="bg-[#141414] py-20 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-2">{s.label}</span>
                <p className="font-serif text-4xl md:text-5xl font-normal text-white tracking-tight">{s.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-white border-b border-[#141414]/[0.08]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9e7a44] block mb-2">Our Foundation</span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#141414] tracking-tight">Built on Unwavering Principles.</h2>
            </div>
            <p className="text-[#6e6b66] text-sm md:text-base max-w-sm leading-relaxed">We don&apos;t just broker square footage; we curate the architectural backdrop for your legacy.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-[#faf8f5] p-8 md:p-10 border border-[#141414]/[0.08]">
                <span className="font-serif text-2xl text-[#9e7a44] block mb-6">0{i + 1}</span>
                <h3 className="font-serif text-xl font-normal text-[#141414] mb-3">{v.title}</h3>
                <p className="text-[#6e6b66] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Landmark Highlights */}
      <section className="py-24 md:py-28 px-4 md:px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9e7a44] block mb-2">Brand Documentation</span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#141414] tracking-tight">Landmark Portfolio</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/flex-1.jpg", title: "Signature Development Release", desc: "Flagship architectural presentation." },
              { src: "/flex.jpg", title: "Prime Corridor Hoarding", desc: "Curated city hoardings across NCR." },
              { src: "/j.jpg", title: "Brand Identity Monograph", desc: "Private client presentation catalog." }
            ].map((banner, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden border border-[#141414]/[0.08] bg-[#141414] mb-5 flex items-center justify-center">
                  <img 
                    src={banner.src} 
                    alt={banner.title} 
                    className="max-w-full max-h-full object-contain" 
                  />
                </div>
                <h3 className="font-serif text-lg text-[#141414] mb-1">{banner.title}</h3>
                <p className="text-[#6e6b66] text-xs">{banner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section: Deep Ink Restraint */}
      <section className="mx-6 mb-24 max-w-7xl lg:mx-auto">
        <div className="bg-[#141414] text-[#faf8f5] py-16 md:py-20 px-8 md:px-16 border border-[#141414] flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9e7a44] block mb-3">Begin Your Journey</span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal mb-4 tracking-tight leading-tight">
              Acquire A Residence of Distinction.
            </h2>
            <p className="text-[#9c978f] text-sm md:text-base max-w-md">Experience real estate the way it was intended—confidential, transparent, and tailored to your lifestyle.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Link href="/properties" className="bg-[#faf8f5] text-[#141414] px-8 py-4 font-medium uppercase tracking-[0.2em] text-xs hover:bg-white transition-all text-center">
              Explore Portfolio
            </Link>
            <Link href="/contact" className="border border-white/20 text-[#faf8f5] px-8 py-4 font-medium uppercase tracking-[0.2em] text-xs hover:border-white transition-all text-center">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
