"use client";
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

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

  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Speak</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          
          <div className="flex gap-3 self-end md:self-auto">
            <button 
              onClick={() => scroll('left')}
              className="p-3 md:p-4 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 md:p-4 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialData.map((t) => (
            <Card key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;