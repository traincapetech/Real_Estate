"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  if (subscribed) {
    return (
      <div className="flex items-center gap-2 text-emerald-400 text-xs tracking-wider uppercase py-2">
        <Check size={16} />
        <span>You are subscribed to private intelligence.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border-b border-white/30 hover:border-white focus-within:border-white transition-colors pb-2"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
        className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-hidden pr-4"
        required
      />
      <button
        type="submit"
        aria-label="Submit newsletter subscription"
        className="text-white hover:text-[#9e7a44] transition-colors p-2 cursor-pointer"
      >
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
