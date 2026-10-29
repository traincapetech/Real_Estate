"use client";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactClient() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .sendForm(
        "service_czjz1vw",
        "template_wrjxiqx", // template id
        form.current,
        "MvoLNgC2UxtvskUYZ" // public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          setIsSubmitting(false);
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
          setIsSubmitting(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen text-[#141414] overflow-x-hidden">
      {/* Header: Cinematic Ink Banner */}
      <section className="relative pt-32 pb-24 px-4 md:px-6 bg-[#141414] overflow-hidden text-center border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920"
            alt="Luxury Architecture Background"
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#9e7a44] mb-4 block"
          >
            Private Advisory
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-7xl font-normal text-white mb-6 tracking-tight leading-tight"
          >
            Begin A Private Consultation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed"
          >
            Whether acquiring a primary estate, an investment asset, or seeking valuation advisory, our partners are at your service.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-2">
                  Coordinates
                </span>
                <h2 className="font-serif text-3xl font-normal text-[#141414] mb-8 tracking-tight">Direct Channels</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <Phone size={18} strokeWidth={1.5} />, title: "Private Advisory", details: ["+91 93116 96477"], link: "tel:+919311696477" },
                    { icon: <Mail size={18} strokeWidth={1.5} />, title: "Confidential Desk", details: ["sales@boldindiagroup.com"], link: "mailto:sales@boldindiagroup.com" },
                    { icon: <MapPin size={18} strokeWidth={1.5} />, title: "Registered Office", details: ["RZ A-1/25, Mahaveer Enclave, Palam-Dabri Road, New Delhi 110045"] },
                    { icon: <Clock size={18} strokeWidth={1.5} />, title: "Advisory Hours", details: ["Mon – Sat: 10AM – 7PM IST", "By Prior Appointment"], special: true },
                  ].map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="p-6 bg-white border border-[#141414]/[0.08]">
                      <div className="w-10 h-10 bg-[#faf8f5] text-[#9e7a44] flex items-center justify-center mb-4 border border-[#141414]/[0.06]">
                        {item.icon}
                      </div>
                      <h4 className="font-serif text-[#141414] text-base mb-1">
                        {item.title}
                      </h4>
                      {item.details.map((line, i) => (
                        <p key={i} className={`text-xs leading-relaxed ${item.special && i === 1 ? "text-[#9e7a44] uppercase tracking-wider text-[10px] mt-1" : "text-[#6e6b66]"}`}>
                          {item.link ? (
                            <a href={item.link} className="hover:text-[#141414] transition-colors">
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#141414] p-8 md:p-12 text-[#faf8f5] border border-[#141414]">
                <MessageSquare className="text-[#9e7a44] mb-4" size={24} strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-normal mb-2">Private Concierge Desk</h3>
                <p className="text-[#9c978f] mb-6 text-sm leading-relaxed">Direct WhatsApp assistance for private viewing bookings and off-market portfolio queries.</p>
                <a
                  href="https://wa.me/919311696477"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#faf8f5] hover:text-[#9e7a44] transition-colors"
                >
                  Message Concierge →
                </a>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-[#141414]/[0.08] p-8 md:p-12">
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#9e7a44] block mb-2">
                Confidential Inquiry
              </span>
              <h3 className="font-serif text-3xl font-normal text-[#141414] mb-2 tracking-tight">Transmit An Inquiry</h3>
              <p className="text-[#6e6b66] mb-8 text-sm">Please submit your details below and a dedicated senior advisor will reach out.</p>
              <form ref={form} className="space-y-5" onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6e6b66]">Full Name</label>
                    <input name="user_name" required type="text" placeholder="Rahul Verma" className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 outline-none focus:border-[#141414] text-sm text-[#141414] transition" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6e6b66]">Phone Number</label>
                    <input name="user_phone" required type="tel" placeholder="+91 00000 00000" className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 outline-none focus:border-[#141414] text-sm text-[#141414] transition" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6e6b66]">Email Address</label>
                  <input name="user_email" required type="email" placeholder="rahul@example.com" className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 outline-none focus:border-[#141414] text-sm text-[#141414] transition" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6e6b66]">Inquiry Details</label>
                  <textarea name="message" required rows={4} placeholder="Describe the properties, location, or investment profile you are evaluating..." className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 outline-none focus:border-[#141414] text-sm text-[#141414] transition resize-none"></textarea>
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-[#141414] text-[#faf8f5] py-4 rounded-sm font-medium uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-[#2c2c2c] transition disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Transmitting..." : "Submit Inquiry"}
                  {!isSubmitting && <Send size={14} className="text-[#9e7a44]" />}
                </button>
                {submitStatus === "success" && (
                  <p className="text-emerald-700 text-xs uppercase tracking-wider font-medium text-center mt-3">Inquiry transmitted successfully. We will be in touch shortly.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-rose-700 text-xs uppercase tracking-wider font-medium text-center mt-3">Failed to transmit message. Please contact us directly via telephone.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps: Architectural Framing */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto overflow-hidden border border-[#141414]/[0.08] shadow-sm">
          <iframe
            title="Bold India Group Office Location"
            src="https://maps.google.com/maps?q=28.5987556,77.0817643&z=17&hl=en&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
