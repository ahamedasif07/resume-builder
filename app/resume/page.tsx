"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Progressbar from "../components/header/progressbar";

import CareerSummary from "../components/CareerSummary/CareerSummary";
import PersonalInfo from "../components/PersonalInformation/PersonalInfo";
import WorkExperienceForm from "../components/WorkExperence/WorkExperence";
import EducationPage from "../components/Education/Education";
import Contact from "../components/Contact/Contact";
import Genaration from "../components/Genaration/Genaration";
import ReviewResume from "../components/ReviewResume/ReviewResume";

const Resume = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const steps = [
    { key: "step-0", component: <PersonalInfo onNext={nextStep} /> },
    {
      key: "step-1",
      component: <CareerSummary onBack={prevStep} onNext={nextStep} />,
    },
    {
      key: "step-2",
      component: <WorkExperienceForm onBack={prevStep} onNext={nextStep} />,
    },
    {
      key: "step-3",
      component: <EducationPage onBack={prevStep} onNext={nextStep} />,
    },
    {
      key: "step-4",
      component: <Contact onBack={prevStep} onNext={nextStep} />,
    },
    {
      key: "step-5",
      component: <Genaration onBack={prevStep} onNext={nextStep} />,
    },
    {
      key: "step-6",
      component: <ReviewResume onBack={prevStep} onNext={nextStep} />,
    },
  ];

  return (
    <div className="w-full">
      <Progressbar currentStep={currentStep} />

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={steps[currentStep].key}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -70 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {steps[currentStep].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Resume;
