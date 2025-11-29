"use client";

import React, { useState } from "react";
import Progressbar from "../components/header/progressbar";

import CareerSummary from "../components/CareerSummary/CareerSummary";
import PersonalInfo from "../components/stepContainer/PersonalInfo";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="w-full">
      <Progressbar currentStep={currentStep} />

      {currentStep === 0 && <PersonalInfo onNext={nextStep} />}
      {currentStep === 1 && (
        <CareerSummary onBack={prevStep} onNext={nextStep} />
      )}
    </div>
  );
};

export default Page;
