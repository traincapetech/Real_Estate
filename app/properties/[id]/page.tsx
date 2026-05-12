"use client";
import { useParams, useRouter } from 'next/navigation'; // Added useRouter
import { allProperties } from "../../components/data";
import Link from 'next/link';

export default function PropertyDetails() {
  const params = useParams();
  const router = useRouter(); // Initialize router for programmatic navigation
  
  const property = allProperties.find((p) => p.id === Number(params.id));

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Property not found</h2>
        <Link href="/properties" className="mt-4 text-blue-600 underline">Back to listings</Link>
      </div>
    );
  }
  const handleInquiryRedirect = () => {
    router.push(`/contact`);
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {property.type}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">{property.title}</h1>
              <p className="text-gray-600 flex items-center mt-1">
                <span className="mr-2">📍</span> {property.location}
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-gray-500 font-semibold uppercase">Price</p>
              <p className="text-3xl font-black text-blue-600">₹{property.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Gallery & Info */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Image & Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-sm border">
              <div className="text-center border-r">
                <p className="text-gray-500 text-xs uppercase font-bold">Bedrooms</p>
                <p className="text-xl font-bold">{property.beds || 'N/A'}</p>
              </div>
              <div className="text-center border-r">
                <p className="text-gray-500 text-xs uppercase font-bold">Bathrooms</p>
                <p className="text-xl font-bold">{property.baths || 'N/A'}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-xs uppercase font-bold">Area</p>
                <p className="text-xl font-bold">{property.sqft} <span className="text-sm font-normal">Sq.ft</span></p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold mb-4 border-b pb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed italic">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {property.amenities && property.amenities.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-700">
                    <span className="text-blue-500">✓</span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-xl shadow-xl border sticky top-24 text-center">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📩
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in this Property?</h3>
              <p className="text-gray-500 mb-8">
                Our agents are ready to provide you with more details, floor plans, and schedule a private viewing.
              </p>
              
              <button 
                onClick={handleInquiryRedirect}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 cursor-pointer"
              >
                Request Full Details
              </button>

              <div className="mt-8 pt-6 border-t">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-3">Direct Support</p>
                <a 
                  href="tel:+919876543210" 
                  className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  +91 98765 43210
                </a>
                <p className="text-sm text-gray-500 mt-1">Available 9 AM - 8 PM</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}