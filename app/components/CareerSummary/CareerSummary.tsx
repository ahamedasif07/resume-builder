"use client";
import React from "react";

interface CareerSummaryProps {
  onNext: () => void;
  onBack: () => void;
}

const CareerSummary: React.FC<CareerSummaryProps> = ({ onNext, onBack }) => {
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <h1 className="text-4xl font-bold">Your Career Overview</h1>

      <p className="text-gray-500 mt-4 leading-relaxed">
        A strong career summary will make a lasting impression on recruiters.
        Let's create a summary that highlights your experience and goals.
      </p>

      {/* Job Title Input */}
      <div className="mt-10">
        <label className="text-sm font-semibold">Job Title</label>
        <input
          type="text"
          placeholder="Enter your most recent or current job title"
          className="w-full border rounded-lg px-4 py-3 mt-2 text-sm outline-none"
        />
      </div>

      {/* Summary Box */}
      <div className="mt-8">
        <label className="text-sm font-semibold">Job Summary</label>
        <textarea
          rows={6}
          className="w-full border rounded-lg px-4 py-3 mt-2 text-sm outline-none"
          defaultValue="An experienced marketing professional with over 5 years of expertise in digital marketing..."
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="bg-gray-300 w-48 py-3 rounded-lg">
          ← Back
        </button>

        <button
          onClick={onNext}
          className="bg-[var(--primary)] text-white w-48 py-3 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CareerSummary;
