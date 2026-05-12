import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* Header Section */}
      <section className="pt-20 pb-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-amber-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Let’s Talk About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">Your Future Home.</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Whether you’re looking to buy, sell, or invest, our experts are here to provide 
            tailored advice and premium service.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Contact  Information</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  
                  <div className="group">
                    <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                      <Phone size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                    <p className="text-slate-500">+91 99999 88888</p>
                    <p className="text-slate-500">+91 11 4050 6070</p>
                  </div>

                  <div className="group">
                    <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                      <Mail size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Email Us</h4>
                    <p className="text-slate-500 text-sm font-medium">info@boldindiagroup.com</p>
                    <p className="text-slate-500 text-sm font-medium">sales@boldindiagroup.com</p>
                  </div>

                  <div className="group">
                    <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                      <MapPin size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Our HQ</h4>
                    <p className="text-slate-500">DLF Cyber City, Phase 2</p>
                    <p className="text-slate-500">Gurugram, Haryana 122002</p>
                  </div>

                  <div className="group">
                    <div className="w-12 h-12 bg-slate-900 text-amber-400 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                      <Clock size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Business Hours</h4>
                    <p className="text-slate-500">Mon - Sat: 10AM - 7PM</p>
                    <p className="text-slate-500 text-amber-600 font-bold uppercase text-[10px] tracking-widest mt-1">Closed on Sundays</p>
                  </div>

                </div>
              </div>

              {/* FAQ/Mini-Help Section */}
              <div className="bg-slate-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
                <MessageSquare className="text-amber-400 mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4 italic">Quick Assistance?</h3>
                <p className="text-slate-400 mb-6">Our average response time for business inquiries is less than 2 hours during working hours.</p>
                <button className="text-amber-400 font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                  WhatsApp Support →
                </button>
              </div>
            </div>

            {/* Right Column: Email/Inquiry Form */}
            <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Send a Message</h3>
              <p className="text-slate-500 mb-10 font-medium">Please fill out the form below and we will get back to you shortly.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Verma"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="rahul@example.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all"
                  />
                </div>

            

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-amber-400 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
                >
                  Send Inquiry
                  <Send size={18} className="text-amber-400" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto h-[450px] bg-slate-100 rounded-[3rem] overflow-hidden relative border-8 border-white shadow-2xl">
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
            {/* Replace this div with an actual Google Maps Iframe if needed */}
            <div className="text-center">
              <MapPin size={48} className="text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Interactive Map Location</p>
              <p className="text-slate-400 text-xs mt-2 italic">Gurugram HQ Office</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}