import React from "react";

interface ProgressProps {
  currentStep: number; // 0 = first step, 6 = last step
}

const steps = [
  "Personal Information",
  "Career Summary",
  "Skills & Experience",
  "Education & Certifications",
  "Contact Information",
  "AI Resume Generation",
  "Review & Download",
];

const Progressbar: React.FC<ProgressProps> = ({ currentStep }) => {
  return (
    <div className="relative w-full max-w-[1300px] mx-auto mt-10 mb-10">
      {/* BACK LINE */}
      <div className="absolute top-5 left-16 w-[92%] h-1 bg-gray-300"></div>

      {/* ACTIVE LINE */}
      <div
        className="absolute top-5 left-16 h-1 bg-[var(--primary)] transition-all duration-500"
        style={{
          width: `${(currentStep / (steps.length - 1)) * 100}%`,
        }}
      ></div>

      {/* STEPS */}
      <div className="flex  justify-between w-full relative">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={index}
              className="flex gap-x-10 flex-col items-center text-center"
            >
              {/* STEP CIRCLE */}
              <div
                className={`w-10 h-10 z-10 flex items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300
    ${
      isActive
        ? "bg-[var(--primary)] border-[var(--primary)] text-white"
        : isCompleted
        ? "bg-[var(--primary)] border-[var(--primary)] text-white" // SAME AS ACTIVE
        : "bg-white border-gray-300 text-gray-400"
    }
  `}
              >
                {index + 1}
              </div>

              {/* LABEL */}
              <p
                className={`text-xs mt-2 w-24 transition-all duration-300 font-semibold
                  ${
                    isActive || isCompleted
                      ? "text-[var(--primary)]"
                      : "text-gray-400"
                  }
                `}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progressbar;
