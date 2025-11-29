"use client";
import React, { useState, useEffect } from "react";

interface WorkExperienceProps {
  onNext: () => void;
  onBack: () => void;
}

const Genaration: React.FC<WorkExperienceProps> = ({ onNext, onBack }) => {
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
        <h1 className="text-3xl font-bold mb-2">AI Resume Magic</h1>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Now, let’s turn all your information into a professional resume! Our
          AI will generate a polished, industry-standard version for you.
        </p>

        {/* Progress Bar Section */}
        <div className="mt-10">
          <p className="font-medium mb-3">AI Resume Generation Progress</p>

          <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {isGenerating ? (
            <p className="mt-3 text-green-600 font-medium">
              Generating your resume... {progress}%
            </p>
          ) : (
            <p className="mt-3 text-gray-500 text-sm">
              Click the button below to start AI resume creation
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-12">
          <button
            onClick={startGeneration}
            disabled={isGenerating}
            className={`w-full py-3 rounded-lg text-white ${
              isGenerating
                ? "bg-green-400 cursor-not-allowed"
                : "bg-[var(--primary)]"
            }`}
          >
            {isGenerating ? "Generating..." : "Generate with AI"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Genaration;
