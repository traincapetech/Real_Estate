"use client";
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './Card';

// 1. ADD THE MISSING DATA ARRAY HERE
const testimonialData = [
  { id: 1, name: "Dr. Manju", location: "South Delhi", rating: 5, remarks: "Found my dream clinic location through them. Very professional!", image: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Mr. Sharma", location: "Gurugram", rating: 4.5, remarks: "Excellent service and transparent dealings throughout the process.", image: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Anita Roy", location: "Noida", rating: 5, remarks: "The best real estate consultants in the Delhi NCR region by far.", image: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Rajesh K.", location: "Dwarka", rating: 4, remarks: "Smooth documentation and great support from the team.", image: "https://i.pravatar.cc/150?u=4" },
];

const Testimonial = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Variants for the container to orchestrate children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // This makes cards appear one after another
      }
    }
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-slate-900">Client Speak</h2>
            <div className="h-1.5 w-16 bg-amber-400 rounded-full mt-2"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll Left"
              className="p-4 rounded-xl bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll Right"
              className="p-4 rounded-xl bg-white border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        </div>

        {/* Scroll Container with stagger animation */}
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialData.map((t) => (
            <Card key={t.id} {...t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;