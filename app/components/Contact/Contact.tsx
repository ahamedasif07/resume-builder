"use client";
import React from "react";

interface ContactProps {
  onNext: () => void;
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onNext, onBack }) => {
  return (
    <div className="min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Your Contact Information</h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Include additional contact details and social media links to showcase
          your professional presence.
        </p>

        {/* LinkedIn Profile */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">LinkedIn Profile</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/yourname"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-[var(--primary)]"
          />
        </div>

        {/* Portfolio Website */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">Portfolio Website</label>
          <input
            type="url"
            placeholder="https://yourportfolio.com"
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-[var(--primary)]"
          />
        </div>

        {/* Social Media Select + URL */}
        <div className="flex gap-4 mb-6">
          {/* Platform */}
          <div className="w-[30%]">
            <label className="block mb-2 font-medium">Social Platform</label>
            <select className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring bg-white focus:ring-[var(--primary)]">
              <option value="">Select Platform</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
              <option value="GitHub">GitHub</option>
              <option value="Dribbble">Dribbble</option>
              <option value="Behance">Behance</option>
            </select>
          </div>

          {/* Platform URL */}
          <div className="w-[70%]">
            <label className="block mb-2 font-medium">Social Media URL</label>
            <input
              type="url"
              placeholder="https://facebook.com/yourprofile"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-[var(--primary)]"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          <button
            onClick={onBack}
            className="bg-gray-300 w-48 py-3 rounded-lg hover:bg-gray-400 transition"
          >
            ← Back
          </button>

          <button
            onClick={onNext}
            className="bg-[var(--primary)] text-white w-48 py-3 rounded-lg hover:opacity-90 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
