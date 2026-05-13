"use client";

import { allProperties } from "../components/data";
import { PropertyCard } from "../components/PropertyCard";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PropertiesClient() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            All Properties
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1.5 bg-amber-400 rounded-full mt-2"
          />

          <p className="text-slate-500 mt-6 text-lg max-w-2xl italic">
            Discover our handpicked premium listings across
            India&apos;s most sought-after locations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allProperties.map((prop) => (
            <motion.div key={prop.id} variants={item}>
              <PropertyCard property={prop} />
            </motion.div>
          ))}
        </motion.div>

        {allProperties.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">
              No properties found at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}