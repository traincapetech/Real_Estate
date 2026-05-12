import { Star, StarHalf } from 'lucide-react'; 

interface CardProps {
  rating: number;
  remarks: string;
  name: string;
  location: string;
  image: string;
}

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
    <div className="w-[280px] sm:w-[350px] md:w-[400px] bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center snap-center shrink-0 transition-shadow hover:shadow-md">
      <div className="rounded-full overflow-hidden mb-4 border-2 border-blue-100">
        <img className="h-[60px] w-[60px] object-cover" src={image} alt={name} />
      </div>
      <div className="flex gap-1 mb-3">{renderStars(rating)}</div>
      <div className="text-gray-600 italic mb-4 leading-relaxed">{remarks}</div>
      <div className="font-bold text-blue-900">
        {name} <span className="font-normal text-gray-400">-{location}</span>
      </div>
    </div>
  );
};

export default Card;