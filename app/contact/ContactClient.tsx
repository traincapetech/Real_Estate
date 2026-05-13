"use client";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 md:px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Let&apos;s Talk About <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Your Future Home.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium">
            Whether you&apos;re looking to buy, sell, or invest, our experts are here to provide tailored advice and premium service.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { icon: <Phone size={24} />, title: "Call Us", details: ["+91 99999 88888"] },
                    { icon: <Mail size={24} />, title: "Email Us", details: ["info@boldindiagroup.com", "sales@boldindiagroup.com"] },
                    { icon: <MapPin size={24} />, title: "Our HQ", details: ["DLF Cyber City, Phase 2", "Gurugram, Haryana 122002"] },
                    { icon: <Clock size={24} />, title: "Business Hours", details: ["Mon - Sat: 10AM - 7PM", "Closed on Sundays"], special: true },
                  ].map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="group">
                      <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300 group-hover:rotate-6">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      {item.details.map((line, i) => (
                        <p key={i} className={`text-slate-500 ${item.special && i === 1 ? "text-amber-600 font-bold uppercase text-[10px] tracking-widest mt-1" : "text-sm font-medium"}`}>
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-slate-950 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                  <MessageSquare className="text-amber-400 mb-6" size={32} />
                </motion.div>
                <h3 className="text-2xl font-black mb-4 italic">Need Quick Assistance?</h3>
                <p className="text-slate-400 mb-8 font-medium">Our average response time is less than 2 hours during working hours.</p>
                <a
                  href="https://wa.me/919999988888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors group"
                >
                  WhatsApp Support <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Send a Message</h3>
              <p className="text-slate-500 mb-10 font-medium">Please fill out the form below and we will get back to you shortly.</p>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input type="text" placeholder="Rahul Verma" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all shadow-inner" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all shadow-inner" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="rahul@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all shadow-inner" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all resize-none shadow-inner"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                  Send Inquiry
                  <Send size={18} className="text-amber-400" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
          <iframe
            title="Bold India Group Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.313!2d77.0878!3d28.4947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19221c2abc3b%3A0x9a0dd671cc0be1f7!2sDLF%20Cyber%20City%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.section>
    </div>
  );
}
