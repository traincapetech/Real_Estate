import Link from 'next/link';
import { Property } from './data';

export const PropertyCard = ({ property }: { property: Property }) => (
  <Link href={`/properties/${property.id}`}>
    <div className="border rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-white group cursor-pointer">
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      <div className="p-4">
        <span className="text-blue-600 text-sm font-semibold uppercase">{property.type}</span>
        <h3 className="text-xl font-bold mt-1 group-hover:text-blue-600 transition-colors">{property.title}</h3>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <div className="flex justify-between items-center mt-4 border-t pt-4">
          <span className="text-lg font-bold text-gray-900">{property.price}</span>
          <span className="text-sm text-gray-600">{property.sqft} Sq.Ft</span>
        </div>
      </div>
    </div>
  </Link>
);