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
        stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
      } else if (i - 0.5 <= num) {
        stars.push(<StarHalf key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} size={16} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <motion.div 
      // 2. Use the variants here
      variants={cardVariants}
      
      // 3. Hover effects remain interactive
      whileHover={{ 
        y: -12, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        borderColor: "rgb(251 191 36)" // Subtle amber border on hover to match theme
      }}
      className="w-[280px] sm:w-[350px] md:w-[400px] bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center snap-center shrink-0 transition-colors duration-300"
    >
      <div className="rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner">
        <img className="h-[70px] w-[70px] object-cover" src={image} alt={name} />
      </div>
      
      <div className="flex gap-1 mb-4">
        {renderStars(rating)}
      </div>
      
      <p className="text-slate-600 italic mb-6 leading-relaxed line-clamp-4 text-sm md:text-base">
        "{remarks}"
      </p>
      
      <div className="mt-auto">
        <div className="font-black text-slate-900 uppercase tracking-wide text-sm">
          {name}
        </div>
        <div className="text-amber-500 font-bold text-xs uppercase tracking-widest mt-1">
          {location}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;