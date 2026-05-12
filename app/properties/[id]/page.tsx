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
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="w-full">
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {property.type}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 leading-tight text-balance">{property.title}</h1>
              <p className="text-slate-500 flex items-center mt-2 font-medium">
                <span className="mr-2 text-xl">📍</span> {property.location}
              </p>
            </div>
            <div className="w-full md:w-auto p-4 md:p-0 bg-slate-50 md:bg-transparent rounded-2xl md:rounded-none md:text-right border md:border-0 border-slate-100">
              <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Price</p>
              <p className="text-3xl md:text-4xl font-black text-amber-600">₹{property.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Gallery & Info */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Image & Info */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[600px] relative">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-slate-950/10 rounded-3xl"></div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50">
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
            <div className="bg-slate-950 p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200 sticky top-24 text-center text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
              <div className="w-16 h-16 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl rotate-3">
                📩
              </div>
              <h3 className="text-2xl font-black mb-4 leading-tight italic">Interested in this Property?</h3>
              <p className="text-slate-400 mb-8 font-medium">
                Our specialists are ready to provide you with floor plans and schedule a private viewing.
              </p>
              
              <button 
                onClick={handleInquiryRedirect}
                className="w-full bg-amber-400 text-slate-950 font-black py-5 rounded-2xl hover:bg-amber-300 transition-all shadow-xl shadow-amber-400/20 active:scale-[0.98] uppercase tracking-widest text-sm"
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