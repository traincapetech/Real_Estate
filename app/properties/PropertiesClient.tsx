"use client";

import { allProperties } from "../components/data";
import { motion } from "framer-motion";

type Props = {
  id: string;
};

export default function PropertyDetailsClient({ id }: Props) {
  const property = allProperties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Property Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-[450px] object-cover rounded-2xl"
          />

          <div className="mt-8 bg-white p-8 rounded-2xl shadow">
            <h1 className="text-4xl font-black text-slate-900">
              {property.title}
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              {property.location}
            </p>

            <p className="text-3xl font-bold text-amber-500 mt-4">
              ₹{property.price}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-semibold text-gray-700">
                  Property Type
                </h3>

                <p>{property.type}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">
                  Area
                </h3>

                <p>{property.sqft} sq.ft.</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-3">
                Description
              </h2>

              <p className="text-gray-600 leading-8">
                {property.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}