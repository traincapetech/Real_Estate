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
          <div className="relative w-full max-w-md bg-white border border-[#141414]/15 shadow-2xl p-8 md:p-10 animate-[fadeIn_.3s_ease]">
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-[#9c978f] hover:text-[#141414] text-xl font-normal"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#9e7a44] block mb-2">
                Private Advisory
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-[#141414] tracking-tight">
                Inquire With An Advisor
              </h2>
              <p className="text-[#6e6b66] text-xs mt-2 leading-relaxed">
                Leave your details for confidential portfolio access and private viewings.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 text-sm text-[#141414] placeholder-[#9c978f] outline-none focus:border-[#141414] transition"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 text-sm text-[#141414] placeholder-[#9c978f] outline-none focus:border-[#141414] transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#faf8f5] border border-[#141414]/15 rounded-sm px-4 py-3 text-sm text-[#141414] placeholder-[#9c978f] outline-none focus:border-[#141414] transition"
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-[#141414] text-[#faf8f5] py-3.5 rounded-sm font-medium uppercase text-xs tracking-[0.2em] hover:bg-[#2c2c2c] transition mt-2"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Toast Message */}
      {toast && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none px-4">
          <div className="bg-white text-[#141414] px-8 py-5 border border-[#141414]/15 shadow-2xl animate-[fadeIn_.3s_ease]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#141414] text-[#faf8f5] flex items-center justify-center text-sm font-medium">
                ✓
              </div>
              <div>
                <h3 className="font-serif text-base text-[#141414]">
                  Inquiry Received
                </h3>
                <p className="text-[#6e6b66] text-xs">
                  A private advisor will be in touch shortly.
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