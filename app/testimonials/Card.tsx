"use client";
import { motion, type Variants } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';

interface CardProps {
  rating: number;
  remarks: string;
  name: string;
  location: string;
  image: string;
}

// 1. Define variants outside the component for cleaner code
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const Card = ({ rating, remarks, name, location, image }: CardProps) => {
  const renderStars = (num: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(num)) {
        stars.push(<Star key={i} size={13} className="fill-[#9e7a44] text-[#9e7a44]" />);
      } else if (i - 0.5 <= num) {
        stars.push(<StarHalf key={i} size={13} className="fill-[#9e7a44] text-[#9e7a44]" />);
      } else {
        stars.push(<Star key={i} size={13} className="text-[#141414]/15" />);
      }
    }
    return stars;
  };

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ 
        y: -4, 
        boxShadow: "0 20px 40px -15px rgba(20, 20, 20, 0.08)",
        borderColor: "rgba(20, 20, 20, 0.25)"
      }}
      className="w-[280px] sm:w-[350px] md:w-[380px] bg-white p-8 border border-[#141414]/[0.08] flex flex-col items-center text-center snap-center shrink-0 transition-all duration-400"
    >
      <div className="w-14 h-14 rounded-full overflow-hidden mb-6 border border-[#141414]/10 bg-[#faf8f5]">
        <img className="h-full w-full object-cover" src={image} alt={name} />
      </div>
      
      <div className="flex gap-1 mb-5">
        {renderStars(rating)}
      </div>
      
      <p className="font-serif italic text-[#141414] mb-8 leading-relaxed line-clamp-4 text-base">
        “{remarks}”
      </p>
      
      <div className="mt-auto pt-4 border-t border-[#141414]/[0.06] w-full">
        <div className="font-serif text-[#141414] text-base">
          {name}
        </div>
        <div className="text-[#9e7a44] font-medium text-[10px] uppercase tracking-[0.25em] mt-0.5">
          {location}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;