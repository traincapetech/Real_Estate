"use client";
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card.tsx';

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
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Client Speak</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border hover:bg-blue-600 hover:text-white transition-colors"
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