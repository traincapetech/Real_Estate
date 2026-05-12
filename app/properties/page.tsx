
import { allProperties } from "../components/data"
import { PropertyCard } from '../components/PropertyCard';


export default function Properties() {
  return (
    <div>
   
      <div className="bg-gray-50 min-h-screen py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">All Properties</h1>
            <div className="h-1.5 w-20 bg-amber-400 rounded-full mt-2"></div>
            <p className="text-slate-500 mt-6 text-lg max-w-2xl italic">Discover our handpicked premium listings across India's most sought-after locations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {allProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>

          {allProperties.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No properties found at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}