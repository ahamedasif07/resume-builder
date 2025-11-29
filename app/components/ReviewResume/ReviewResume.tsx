"use client";
import React, { useState, useEffect } from "react";

interface WorkExperienceProps {
  onNext: () => void;
  onBack: () => void;
}

const ReviewResume: React.FC<WorkExperienceProps> = ({ onNext, onBack }) => {
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  // Auto-progress when generating
  useEffect(() => {
    if (!isGenerating) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // slow progress
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isGenerating]);

  const startGeneration = () => {
    setIsGenerating(true);
    setProgress(0);

    // Simulate backend resume generation
    setTimeout(() => {
      onNext(); // Move to next step automatically after finish
    }, 6500);
  };

  return (
    <div className="min-h-screen flex justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2">
          Review Your AI-Generated Resume
        </h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Take a moment to review your resume. You can make changes and
          regenerate if needed. When you’re ready, download it and start
          applying!
        </p>

        {/* BUTTONS */}
        <div className="flex justify-between mt-12">
          <button onClick={onBack} className="bg-gray-300 w-48 py-3 rounded-lg">
            Download Resume
          </button>

          <button
            onClick={onNext}
            className="bg-[var(--primary)] text-white w-48 py-3 rounded-lg"
          >
            Find Your Favorite Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
