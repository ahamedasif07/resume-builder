"use client";

import React, { useState } from "react";
import Progressbar from "../components/header/progressbar";

import CareerSummary from "../components/CareerSummary/CareerSummary";
import PersonalInfo from "../components/stepContainer/PersonalInfo";
import WorkExperienceForm from "../components/WorkExperence/WorkExperence";
import EducationPage from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import Genaration from "../components/Genaration/Genaration";
import ReviewResume from "../components/ReviewResume/ReviewResume";

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
      {currentStep === 2 && (
        <WorkExperienceForm onBack={prevStep} onNext={nextStep} />
      )}
      {currentStep === 3 && (
        <EducationPage onBack={prevStep} onNext={nextStep} />
      )}
      {currentStep === 4 && <Contact onBack={prevStep} onNext={nextStep} />}
      {currentStep === 5 && <Genaration onBack={prevStep} onNext={nextStep} />}
      {currentStep === 6 && (
        <ReviewResume onBack={prevStep} onNext={nextStep} />
      )}
    </div>
  );
};

export default Page;
