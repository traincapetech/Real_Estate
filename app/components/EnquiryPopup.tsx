"use client";
import { useEffect, useState } from "react";

const EnquiryPopup = () => {
const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => {
    setShow(true);
  }, 1500);

  return () => clearTimeout(timer);
}, []);

  const handleSubmit = () => {
    setShow(false);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  return (
    <>
      {/* Popup */}
      {show && (
<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[1px] px-4">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 animate-[fadeIn_.3s_ease]">

            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            <div className="text-center mb-6">
              <h2 className="text-3xl font-black text-slate-900">
                Welcome to BIG
              </h2>

              <p className="text-gray-500 mt-2">
                Fill your details and our team will contact you soon.
              </p>
            </div>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-400"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-amber-400"
              />

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-amber-400 text-slate-950 py-3 rounded-xl font-bold hover:bg-amber-300 transition hover:scale-[1.02]"
              >
                Enquire Now
              </button>

            </form>
          </div>
        </div>
      )}
{/* Toast Message */}
{toast && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">

    <div className="bg-white text-slate-900 px-6 py-5 rounded-2xl shadow-2xl border border-amber-300 animate-[fadeIn_.3s_ease]">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-white text-xl font-black shadow-md">
          ✓
        </div>

        <div>
          <h3 className="font-bold text-lg text-slate-900">
            Enquiry Submitted
          </h3>

          <p className="text-gray-500 text-sm">
            Thank you! We'll contact you soon.
          </p>
        </div>

      </div>

    </div>
  </div>
)}
    </>
  );
};

export default EnquiryPopup;