import React, { useEffect, useRef, useState } from "react";

interface ProgressProps {
  currentStep: number; // 0 = first step, last = steps.length - 1
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [activeStyle, setActiveStyle] = useState({ left: 0, width: 0 });
  const [backStyle, setBackStyle] = useState({ left: 0, width: 0 });

  const calculate = () => {
    const container = containerRef.current;
    if (!container) return;

    const first = stepRefs.current[0];
    const last = stepRefs.current[steps.length - 1];
    const target =
      stepRefs.current[Math.max(0, Math.min(currentStep, steps.length - 1))];

    if (!first || !last || !target) return;

    const containerRect = container.getBoundingClientRect();
    const firstRect = first.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const firstCenter =
      firstRect.left + firstRect.width / 2 - containerRect.left;
    const lastCenter = lastRect.left + lastRect.width / 2 - containerRect.left;
    const targetCenter =
      targetRect.left + targetRect.width / 2 - containerRect.left;

    // Gray line between step 1 and step 7
    setBackStyle({
      left: firstCenter,
      width: lastCenter - firstCenter,
    });

    // Green active line (first to current)
    setActiveStyle({
      left: firstCenter,
      width: targetCenter - firstCenter,
    });
  };

  useEffect(() => {
    calculate();

    const onResize = () => calculate();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentStep]);

  return (
    <div className="relative w-full max-w-[1300px] mx-auto mt-10 mb-10 px-4">
      <div className="relative" ref={containerRef}>
        {/* BACK GRAY LINE */}
        <div
          className="absolute top-5 h-1 bg-gray-300 rounded-sm"
          style={{
            left: backStyle.left,
            width: backStyle.width,
          }}
        />

        {/* ACTIVE GREEN LINE */}
        <div
          className="absolute top-5 h-1 bg-[var(--primary)] rounded-sm transition-all duration-500"
          style={{
            left: activeStyle.left,
            width: activeStyle.width,
          }}
        />

        {/* STEPS */}
        <div className="flex justify-between w-full relative z-10">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                ref={(el) => (stepRefs.current[index] = el)}
              >
                {/* Circle */}
                <div
                  className={`w-10 h-10 z-20 flex items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                        : isCompleted
                        ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                        : "bg-white border-gray-300 text-gray-400"
                    }
                  `}
                >
                  {index + 1}
                </div>

                {/* Label */}
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
    </div>
  );
};

export default Progressbar;
