
import { allProperties } from "../components/data"
import { PropertyCard } from '../components/PropertyCard';


export default function Properties() {
  return (
    <div>
   
      <div className="bg-gray-50 min-h-screen py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900">All Properties</h1>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            <p className="text-gray-600 mt-4">Discover our handpicked premium listings across India.</p>
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