"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm({ services }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  if (status === "success") {
    return (
      <div className="bg-white p-4 rounded-[2.5rem] border border-[#2563eb]/20 text-center animate-fade-in-up shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 via-transparent to-[#7c3aed]/5 opacity-50" />
        <div className="relative z-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2563eb]/10 to-[#7c3aed]/10 flex items-center justify-center mx-auto mb-2 border border-[#2563eb]/20 group-hover:scale-110 transition-transform duration-500">
            <CheckCircle2 size={48} className="text-[#2563eb]" />
          </div>
          <h3
            className="text-4xl font-black text-gray-900 mb-6 tracking-tighter"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Transmission Received.
          </h3>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">
            &ldquo;Your inquiry has been logged into our precision network. A
            specialist will reach out within 24 business hours.&rdquo;
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="text-[#2563eb] font-black underline uppercase tracking-widest text-xs hover:text-[#7c3aed] transition-colors"
          >
            Initiate New Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-3 rounded-[2rem] border border-gray-200 shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2563eb]/10 via-transparent to-[#7c3aed]/10 blur-[100px] pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#2563eb]/5 to-transparent rounded-full blur-3xl" />
      
      <h3
        className="text-3xl font-black text-gray-900 mb-10 tracking-tight"
        style={{ fontFamily: "Outfit, sans-serif" }}
      >
        Secure Message <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#7c3aed]">Portal</span>
      </h3>

      <form className="space-y-3 relative z-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] ml-2">
              Full Identity
            </label>
            <input
              required
              type="text"
              placeholder="e.g. Alexander Pierce"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 focus:outline-none transition-all shadow-sm hover:border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] ml-2">
              E-Mail
            </label>
            <input
              required
              type="email"
              placeholder="pierce@global-industry.com"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 focus:outline-none transition-all shadow-sm hover:border-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] ml-2">
              Phone
            </label>
            <input
              required
              type="text"
              placeholder="e.g. +91 9876543210"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 focus:outline-none transition-all shadow-sm hover:border-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] ml-2">
              Website
            </label>
            <input
              required
              type="url"
              placeholder="kdsinternational.org"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 focus:outline-none transition-all shadow-sm hover:border-gray-300"
            />
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] ml-2">
            Solution Vertical
          </label>
          <div className="relative">
            <select className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-gray-900 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 focus:outline-none transition-all appearance-none cursor-pointer hover:border-gray-300">
              <option className="text-gray-500">Select Core Capability</option>
              {services.map((s) => (
                <option key={s.id} className="text-gray-900">{s.title}</option>
              ))}
              <option className="text-gray-900">Strategic Partnership</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
              <ArrowRight size={16} className="rotate-90" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] ml-2">
            Project Brief
          </label>
          <textarea
            required
            rows={4}
            placeholder="Describe your precision requirements..."
            className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-3 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20 focus:outline-none transition-all resize-none shadow-sm hover:border-gray-300"
          ></textarea>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full py-3 text-lg bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white border-0 rounded-2xl shadow-lg shadow-[#2563eb]/25 group/btn hover:shadow-xl hover:shadow-[#2563eb]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <span className="flex items-center gap-3">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Transmitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Dispatch Inquiry{" "}
              <Send
                size={20}
                className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
              />
            </span>
          )}
        </Button>

        {/* Decorative footer */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <p className="text-center text-gray-400 text-[10px] uppercase font-bold tracking-widest">
            Encrypted Connection
          </p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
      </form>
    </div>
  );
}