import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./slices/resumeSlice";
import careerReducer from "./slices/CarrerSlice";
import workExperienceReducer from "./slices/workExperienceSlice";
import educationReducer from "./slices/educationSlice";

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
    career: careerReducer,
    workExperience: workExperienceReducer,
    education: educationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
