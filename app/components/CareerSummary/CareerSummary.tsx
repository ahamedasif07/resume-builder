"use client";

import { setCareerInfo } from "@/app/redux/slices/CarrerSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface CareerSummaryProps {
  onNext: () => void;
  onBack: () => void;
}

// ---------- Form Type ----------
interface CareerForm {
  jobTitle: string;
  summary: string;
}

const CareerSummary: React.FC<CareerSummaryProps> = ({ onNext, onBack }) => {
  const dispatch = useDispatch();

  // ---------- State ----------
  const [form, setForm] = useState<CareerForm>({
    jobTitle: "Senior Frontend Developer",
    summary:
      "A highly skilled professional with over 5 years of experience in delivering high-quality web applications, specializing in modern frontend technologies, UI/UX, and performance-driven development.",
  });

  // ---------- Handle Input Change ----------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ---------- Handle Click Next ----------
  const handleNext = () => {
    dispatch(setCareerInfo(form)); // directly pass form object
    onNext();
  };

  return (
    <div className="max-w-6xl mx-auto mt-16">
      <h1 className="text-4xl font-bold">Your Career Overview</h1>

      <p className="text-gray-500 mt-4 leading-relaxed">
        A strong career summary will make a lasting impression on recruiters.
      </p>

      {/* Job Title Input */}
      <div className="mt-10">
        <label className="text-sm font-semibold">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={form.jobTitle}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 mt-2 text-sm outline-none"
        />
      </div>

      {/* Summary Box */}
      <div className="mt-8">
        <label className="text-sm font-semibold">Job Summary</label>
        <textarea
          rows={6}
          name="summary"
          value={form.summary}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 mt-2 text-sm outline-none"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-12">
        <button onClick={onBack} className="bg-gray-300 w-48 py-3 rounded-lg">
          ← Back
        </button>

        <button
          onClick={handleNext}
          className="bg-[var(--primary)] text-white w-48 py-3 rounded-lg"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CareerSummary;
