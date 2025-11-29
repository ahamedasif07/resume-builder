import React from "react";
import Progressbar from "../components/header/progressbar";
import PersonalInfo from "../components/stepContainer/PersonalInfo";
import CareerSummary from "../components/CareerSummary/CareerSummary";

const page = () => {
  return (
    <div>
      <div>
        <Progressbar currentStep={0} />
      </div>
      <div></div>
    </div>
  );
};

export default page;
